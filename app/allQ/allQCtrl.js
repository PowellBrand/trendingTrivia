
// angular.module('triviaTrends',[]).contoller('allQ', function($scope, $http){
//     $http.get('https://practiceapi.devmountain.com/api/trivia/questions')
//     .then(function(res){
//         $scope.question = res.data;
//     })
// })

// 49F, 49G
angular.module('triviaTrends').contoller('allQCtrl', function ($scope, mainSrvc){
    mainSrvc.getTriva().then(function (res){
        $scope.question = res.data;
    })
})