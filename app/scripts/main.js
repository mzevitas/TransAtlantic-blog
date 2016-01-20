;(function() {

    'use strict';


 var app = angular.module('app', ['ui.router',  'ngMaterial']);

    app.constant('PARSE', {
        URL: 'https://api.parse.com/1/',
        CONFIG: {
            headers: {
                'X-Parse-Application-Id': '7MrfvMJxArkl3XzuhNb88967V2ZWIvBxWgOjUD57',
                'X-Parse-REST-API-Key': 'lEt48f695Lm9O2bmMMkL5pNP8zPD3rcowxCpTUlO',
                'Content-Type': 'application/json'
            }

        }
    });

        
		app.config( function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		      $stateProvider
//**************************Main Routes**********************************
		      .state( 'home', {
		        url: '/',
		        templateUrl: 'views/home.html'
		      })

		    });

 app.controller('routeCtrl', ['$scope', '$location', '$state', function($scope, $location, $state) {
    $scope.state = $state;
 }])





}());