class AppPseudoCtrl {
    constructor($cookies, $location) {
        'ngInject';
        
        let user = $cookies.get("pseudo") || ''
        if(user){
            let page = '/home';
            $location.url(page);
        }
        else{
            this._cookie = $cookies;
            this._location = $location;
        }
    }
    
    login(){
        this._cookie.put("pseudo",this.pseudo);
        let page = '/home';
        this._location.url(page);
    }
}

let AppPseudo = {
    controller: AppPseudoCtrl,
    controllerAs: '$ctrl',
    templateUrl: 'app/pseudo/pseudo.html'
};

angular.module('app').component('appPseudo', AppPseudo);