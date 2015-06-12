// Craze Module
var craze = angular.module('craze',['ngRoute']);


// craze Routing
craze.config(function($routeProvider){
    
        $routeProvider.when('/',{
           templateUrl: 'templates/home.html',
           controller: 'homeCnt'
        }),
        $routeProvider.when('/home',{
           templateUrl: 'templates/home.html',
           controller: 'homeCnt'
        }),
        $routeProvider.when('/trending',{
           templateUrl: 'templates/trending.html',
           controller: 'trendCnt'
        }),
        $routeProvider.when('/explore',{
           templateUrl: 'templates/explore.html',
           controller: 'exploreCnt'
        }),
        $routeProvider.when('/people',{
           templateUrl: 'templates/people.html',
           controller: 'peopleCnt'
        })
        
})


//craze home Controller
craze.controller('homeCnt', ['$scope','$http', function($scope,$http){
    $scope.posts= [];
    $http.get('http://192.168.1.12/craze/posts.json').success(function (data) {
              $scope.posts= data.records;            
        })
}])
     
//craze tranding controller
craze.controller('trendCnt', ['$scope', function($scope){

}])

//craze explore controller
craze.controller('exploreCnt', ['$scope', function($scope){

}])

//craze people controller
craze.controller('peopleCnt', ['$scope','$http', function($scope,$http){
    $scope.posts= [];
    $http.get('http://192.168.1.12/craze/posts.json').success(function (data) {
              $scope.posts= data.records;            
        })
}])

//craze posts directive
craze.directive('myPost', function() {
    return {
      restrict:'A',
      templateUrl: 'templates/post.html',    
    };
});