class AppHeaderCtrl {
    constructor($cookies, $location) {
        'ngInject';
        
        let user = $cookies.get("pseudo") || ''
        if(user){
            this.user = user;
        }
        else{
            let page = '/';
            $location.url(page);
        }
    }
    
    
}

let AppHeader = {
    controller: AppHeaderCtrl,
    controllerAs: '$ctrl',
    templateUrl: 'app/layout/header.html'
};

angular.module('app').component('appHeader', AppHeader);