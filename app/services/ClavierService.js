(function () {
    'use strict';
    
    angular.module('app').factory('ClavierService', ClavierService);
    ClavierService.$inject = ['$http'];
    
    function ClavierService($http) {
        var service = {
            Alphabet:[{letter:"A",tested:false},{letter:"Z",tested:false},{letter:"E",tested:false},{letter:"R",tested:false},{letter:"T",tested:false},{letter:"Y",tested:false},{letter:"U",tested:false},{letter:"I",tested:false},{letter:"O",tested:false},{letter:"P",tested:false},{letter:"Q",tested:false},{letter:"S",tested:false},{letter:"D",tested:false},{letter:"F",tested:false},{letter:"G",tested:false},{letter:"H",tested:false},{letter:"J",tested:false},{letter:"K",tested:false},{letter:"L",tested:false},{letter:"M",tested:false},{letter:"W",tested:false},{letter:"X",tested:false},{letter:"C",tested:false},{letter:"V",tested:false},{letter:"B",tested:false},{letter:"N",tested:false}]
        };

        service.getAlphabet = getAlphabet;
        service.Desactivate = Desactivate;
        service.getLetter = getLetter;
        service.init = init;

        return service;
        
        function init(){
            this.Alphabet = [{letter:"A",tested:false},{letter:"Z",tested:false},{letter:"E",tested:false},{letter:"R",tested:false},{letter:"T",tested:false},{letter:"Y",tested:false},{letter:"U",tested:false},{letter:"I",tested:false},{letter:"O",tested:false},{letter:"P",tested:false},{letter:"Q",tested:false},{letter:"S",tested:false},{letter:"D",tested:false},{letter:"F",tested:false},{letter:"G",tested:false},{letter:"H",tested:false},{letter:"J",tested:false},{letter:"K",tested:false},{letter:"L",tested:false},{letter:"M",tested:false},{letter:"W",tested:false},{letter:"X",tested:false},{letter:"C",tested:false},{letter:"V",tested:false},{letter:"B",tested:false},{letter:"N",tested:false}];
        }
    
        function getAlphabet(){
            return this.Alphabet;
        }
        
        function getLetter(index){
            return this.Alphabet[index].letter;
        }
    
        function Desactivate(index){
            this.Alphabet[index].tested = true;
        }
        
    }
})();