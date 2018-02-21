(function() {
  'use strict';
    
    angular.module('app').controller('AppContentCtrl', AppContentCtrl);

    AppContentCtrl.$inject = ['$scope','MotService','ClavierService','ScoreService','GameService'];
    
    function AppContentCtrl($scope,MotService,ClavierService,ScoreService,GameService){
        
        $scope.init = function(){
            MotService.init();
            ClavierService.init();
            ScoreService.init();
            GameService.init();
            
            $scope.finish = false;
            
            
            $scope.Clavier=ClavierService.getAlphabet();
            
            $scope.score = {
                error:ScoreService.getError(),
                success:ScoreService.getSuccess(),
                total:ScoreService.getTotal()
            }
            
            MotService.getRandomWord();
            $scope.result = MotService.getResult();
        }
        
        $scope.verif = function(index){
            let letter = ClavierService.getLetter(index);
            let exist = MotService.verifLetter(letter);
            
            if(exist){
                MotService.updateResult(letter);
                $scope.result = MotService.getResult();
                ScoreService.addSuccess();
            }
            else{
                ScoreService.addError();
            }
            
            $scope.score = {
                error:ScoreService.getError(),
                success:ScoreService.getSuccess(),
                total:ScoreService.getTotal()
            }
            
            ClavierService.Desactivate(index);
            
              if(ScoreService.isFailed() && !MotService.isSuccess()){
                GameService.finish = true;
                GameService.success = false;
            }
        
            if(MotService.isSuccess() && !ScoreService.isFailed()){
                GameService.finish = true;
                GameService.success = true;
            }
            
            GameService.finishGame(MotService.Word);
            
            $scope.finish = GameService.finish;
        }
        
        
    }
}());




