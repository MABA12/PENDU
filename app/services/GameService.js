(function () {
    'use strict';
    
    angular.module('app').factory('GameService', GameService);
    GameService.$inject = ['$http'];
    
    function GameService($http) {
        var service = {
            finish:false,
            success:false
        };

        service.finishGame = finishGame;
        service.init = init;

        return service;
        
        function init(){
            this.finish=false;
            this.success=false;
        }

        function  finishGame(Word) {
            if(this.finish){
                if(this.success){
                    swal({
                            title: "Succès!",
                            text: "Félicitation vous avez gagné",
                            type: "success"
                        });
                }
                else{
                     swal({
                            title: "Désolé!",
                            text: "Le mot exaste est : "+Word.toUpperCase(),
                            type: "error"
                        });
                }
            }
        }
    }
})();