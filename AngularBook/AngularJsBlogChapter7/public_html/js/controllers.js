'use strict';

/* Controllers */

var angularBlogControllers = angular.module('angularBlogControllers', []);



angularBlogControllers.controller('BlogCtrl', ['$scope', 'BlogList',
    function BlogCtrl($scope, BlogList) {
        $scope.blogList = [];
        BlogList.get({},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $scope.blogList = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
        );


    }]);

angularBlogControllers.controller('BlogViewCtrl', ['$scope', '$routeParams', 'BlogPost',
    function BlogViewCtrl($scope, $routeParams, BlogPost) {
        var blogId = $routeParams.id;
        $scope.blg = 1;
        BlogPost.get({id: blogId},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $scope.blogEntry = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
        );

    }]);
