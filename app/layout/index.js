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

class AppContentCtrl {
    constructor($cookies, $location) {
        'ngInject';
        this._location = $location;
        
        this.init();
    }
    
    init(){
        this.getRandomWord();
        
       this.Clavier=[{letter:"A",tested:false},{letter:"Z",tested:false},{letter:"E",tested:false},{letter:"R",tested:false},{letter:"T",tested:false},{letter:"Y",tested:false},{letter:"U",tested:false},{letter:"I",tested:false},{letter:"O",tested:false},{letter:"P",tested:false},{letter:"Q",tested:false},{letter:"S",tested:false},{letter:"D",tested:false},{letter:"F",tested:false},{letter:"G",tested:false},{letter:"H",tested:false},{letter:"J",tested:false},{letter:"K",tested:false},{letter:"L",tested:false},{letter:"M",tested:false},{letter:"W",tested:false},{letter:"X",tested:false},{letter:"C",tested:false},{letter:"V",tested:false},{letter:"B",tested:false},{letter:"N",tested:false}];
        
        this.score = {
            error:0,
            sucess:0,
            total:AppConstants.TotalError
        }
        
        this.game = {
            finish:false,
            success:false
        }
        
    }
    
    getRandomWord(){
        let random = Math.floor((Math.random()*mots.length)+1);
        this.Word = mots[random];
        
        this.result = "";
        for(let i=0; i<this.Word.length;i++){
            this.result += "-";
        }
    }
    
    verif(index){
        this.verifLetter(this.Clavier[index].letter.toUpperCase());
        this.Clavier[index].tested = true;
    }
    
    verifLetter(letter){
        let word = this.Word.toUpperCase();
        let index = word.indexOf(letter);
        if(index>=0){
            let result = "";
            for(let i=0; i<this.result.length;i++){
                if(this.Word[i].toUpperCase() == letter){
                    result += letter;
                    this.score.sucess++;
                }
                else{
                    result += this.result[i]; 
                }
                
            }
            this.result = result
            
            if(this.result.toUpperCase() == this.Word.toUpperCase()  && this.score.error<this.score.total){
                this.game.finish = true;
                this.game.success = true;
                this.finishGame();
            }
            
        }else{
            this.score.error++;
            
            if(this.result.toUpperCase() !== this.Word.toUpperCase()  && this.score.error >= this.score.total){
                this.game.finish = true;
                this.game.success = false;
                this.finishGame();
            }
        }
    }
    
    finishGame(){
        if(this.game.finish){
            if(this.game.success){
                swal({
                        title: "Succès!",
                        text: "Félicitation vous avez gagné",
                        type: "success"
                    });
            }
            else{
                 swal({
                        title: "Désolé!",
                        text: "Le mot exaste est : "+this.Word.toUpperCase(),
                        type: "error"
                    });
            }
        }
    }
    
}

let AppContent = {
    controller: AppContentCtrl,
    controllerAs: '$Contentctrl',
    templateUrl: 'app/layout/content.html'
};

angular.module('app').component('appHeader', AppHeader);
angular.module('app').component('appContent', AppContent);