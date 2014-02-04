/* global angular */
"use strict";

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
        .when('/basic', {
            templateUrl: 'app/exo2/exo2.html'
        }).when('/error', {
            templateUrl: 'app/error/error.html'
        }).when('/exo4', {
            templateUrl: 'app/exo4/exo4.html',
            controller: 'Exo4Ctrl'
        }).otherwise({
            redirectTo: '/error'
        });
});