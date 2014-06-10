'use strict';

/* App Module */

var angularBlogApp = angular.module('angularBlogApp', [
    'ngRoute',     
    'angularBlogControllers',
    'angularBlogServices'
    
]);


angularBlogApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'BlogCtrl'
                }).when('/blogPost/:id', {
                    templateUrl: 'partials/blogPost.html',
                    controller: 'BlogViewCtrl'
                });

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);



