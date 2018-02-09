angular.module('triviaTrends').service('trivaSrvc', function($http){
    this.getTriva= function(){
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/trivia/questions'
        })
    }
       
    
})