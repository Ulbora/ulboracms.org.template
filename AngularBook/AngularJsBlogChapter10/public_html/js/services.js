'use strict';

/* Services */

var angularBlogServices = angular.module('angularBlogServices', ['ngResource']);

angularBlogServices.factory('BlogPost', ['$resource',
    function($resource) {
        return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blog/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

angularBlogServices.factory('BlogList', ['$resource',
    function($resource) {
        return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogList", {}, {
            get: {method: 'GET', cache: false, isArray: true}            
        });
    }]);


angularBlogServices.factory('Login', ['$resource',
    function($resource) {
        return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/login", {}, {
            login: {method: 'POST', cache: false, isArray: false}            
        });
    }]);

