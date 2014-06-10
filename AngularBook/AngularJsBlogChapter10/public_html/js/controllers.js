'use strict';

/* Controllers */

var angularBlogControllers = angular.module('angularBlogControllers', []);



angularBlogControllers.controller('BlogCtrl', ['$scope', 'BlogList', '$location', 'checkCreds',
    function BlogCtrl($scope, BlogList, $location, checkCreds) {
        if(!checkCreds()){
            $location.path('/login'); 
        }
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

angularBlogControllers.controller('BlogViewCtrl', ['$scope', '$routeParams', 'BlogPost', '$location', 'checkCreds',
    function BlogViewCtrl($scope, $routeParams, BlogPost, $location, checkCreds) {
        if(!checkCreds()){
            $location.path('/login'); 
        }
        var blogId = $routeParams.id;
        
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

angularBlogControllers.controller('LoginCtrl', ['$scope', '$location','Login', 'setCreds',
    function LoginCtrl($scope, $location, Login, setCreds) { 
        $scope.submit = function(){
             var postData = {
                 "username" : $scope.username,
                 "password" : $scope.password
             };
            Login.login({}, postData,
                function success(response) {                    
                    console.log("Success:" + JSON.stringify(response));                   
                    if(response.authenticated){
                        setCreds($scope.username, $scope.password)
                       $location.path('/'); 
                    }else{
                        $scope.error = "Login Failed"
                    }
                    
                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
        );
            
        };
    }]);

angularBlogControllers.controller('LogoutCtrl', ['$location', 'deleteCreds',
    function LogoutCtrl($location, deleteCreds) { 
        deleteCreds();
        $location.path('/login');         
    }]);

