/// <reference path="angular.min.js" />
var app = angular
.module("myModule", [])
.controller("myController", function ($scope, $http) {
    $http.post('EmployeeService.asmx/GetAllEmployees')
    .then(function (response) {
        $scope.employees = response.data;
    });
});