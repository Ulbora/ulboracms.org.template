'use strict';

/* Services */

var angularBlogServices = angular.module('angularBlogServices', ['ngResource']);

angularBlogServices.factory('BlogPost', ['$resource',
    function($resource) {
        return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogPost", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);
