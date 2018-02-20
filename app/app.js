(function () {
    'use strict';

    var app = angular.module('app', ['ui.router','ngCookies']);
    
    app.config(config);
    
    app.run(run);
    
    run.$inject = ['$cookies','$location'];
    function run($cookies, $location) {
        
    }
    
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
         $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/layout/index.html'
        })
        
        .state('pseudo', {
            url: '/',
            templateUrl: 'app/pseudo/index.html'
        })
    }

})();