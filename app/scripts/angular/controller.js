'use strict';
angular.module('app')
    .controller('WelcomeCtrl',
        ['$rootScope', '$scope', '$http',
            function($rootScope, $scope, $http) {
                $scope.username = 'Conan_Z';
            }]);