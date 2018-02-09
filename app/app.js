// 53C
angular.module('triviaTrends', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state({
        name: '',
        url:'/',
        components:''
    })
    $urlRouterProvider.otherwise('/');
})