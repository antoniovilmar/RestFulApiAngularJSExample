"use strict";
var app = angular.module('controleUsuarios', ['minhasDiretivas', 'ngRoute'])
    .config(function($routeProvider) {


        $routeProvider.when('/usuarios', {
            templateUrl: 'partials/principal.html',
            controller: 'UsersController'
        });

        $routeProvider.when('/usuario/new', {
            templateUrl: 'partials/usuario.html',
            controller: 'UserController'
        });

        // novidade aqui! Nova rota!
        $routeProvider.when('/usuario/edit/:userId', {
            templateUrl: 'partials/usuario.html',
            controller: 'UserController'
        });

        $routeProvider.otherwise({
            redirectTo: '/usuarios'
        });
    });
