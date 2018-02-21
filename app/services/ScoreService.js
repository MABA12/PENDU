(function () {
    'use strict';
    
    angular.module('app').factory('ScoreService', ScoreService);
    ScoreService.$inject = ['$http'];
    
    function ScoreService($http) {
        var service = {
                error:0,
                sucess:0,
                total:AppConstants.TotalError
        };

        service.addError = addError;
        service.getError = getError;
        service.addSuccess = addSuccess;
        service.getSuccess = getSuccess;
        service.getTotal = getTotal;
        service.isFailed = isFailed;
        service.init = init;

        return service;
        
        function init(){
            this.error = 0;
            this.sucess = 0;
            this.total = AppConstants.TotalError;
        }
        
        function addError(){
            this.error++;
        }
        
        function getError(){
            return this.error;
        }
        
        function addSuccess(){
            this.sucess++;
        }
        
        function getSuccess(){
            return this.success;
        }
        
        function getTotal(){
            return this.total;
        }
        
        function isFailed(){
            return (this.error >= this.total)
        }
        
    }
})();