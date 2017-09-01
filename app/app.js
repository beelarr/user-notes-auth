"use strict";

var app = angular.module("MakeANoteApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/login.html'
                controller: ''
            })
    })
