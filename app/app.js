// 53C, 53E, 53F
angular.module('triviaTrends', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home',{
        url:'/',
       templateUrl: "index.html"
    })
    .state('allQ',{
        url:'/allQ',
        templateUrl: "app/allQ/allQCtrl.js",
        controller: 'allQ'
    })
    $urlRouterProvider.otherwise('/');
})