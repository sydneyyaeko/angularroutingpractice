var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'views/home.html'
	})
	.when('about',{
		templateUrl: 'views/about.html'
	})
	.otherwise({
		templateUrl: '/home'
	})
})

app.controller('myCtrl', function($scope){
	$scope.test = "Hello";
})