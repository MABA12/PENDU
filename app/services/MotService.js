(function () {
    'use strict';
    
    angular.module('app').factory('MotService', MotService);
    MotService.$inject = ['$http'];
    
    function MotService($http) {
        var service = {
            Word:'',
            Result:''
        };

        service.getRandomWord = getRandomWord;
        service.getResult = getResult;
        service.verifLetter = verifLetter;
        service.updateResult = updateResult;
        service.isSuccess = isSuccess;
        service.init = init;

        return service;
        
        function init(){
            this.Word = '';
            this.Result = '';
        }

        function  getRandomWord() {
            let random = Math.floor((Math.random()*mots.length)+1);
            this.Word = mots[random].toUpperCase();
            
            console.log(this.Word);
            
            for(let i=0; i<this.Word.length;i++){
                this.Result += "-";
            }
        }
    
        function getResult(){
            return this.Result;
        }
        
        function verifLetter(letter){
            let index = this.Word.indexOf(letter);

            return (index >= 0)
        }
    
        function updateResult(letter){
            let result = "";
            for(let i=0; i<this.Result.length;i++){
                if(this.Word[i] == letter){
                    result += letter;
                }
                else{
                    result += this.Result[i]; 
                }
                
            }
            this.Result = result;
        }

        function isSuccess(){
            return (this.Result == this.Word)
        }
    }
})();