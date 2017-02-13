import angular from 'angular';

const helloApp = angular.module('helloApp', []);

helloApp.controller('helloController', ['$scope', function($scope) {
    $scope.message = 'Hello, world!';
}]);