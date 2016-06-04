angular.module('meusServicos', [])
    .factory("UserService", function($http) {
        var service = {};
        var URL_SERVICE = "http://localhost:8080/user/";
        service.save = function(user) {
        return $http.post('http://localhost:8080/user/', user);
        };
        service.update = function(userId, user) {
            return $http.put('http://localhost:8080/user/'+userId, user);
        };
        service.getById = function(userId){
            return $http.get(URL_SERVICE+userId);
        };
        service.getAll = function(){
            return $http.get(URL_SERVICE);
        };
        service.deleteById = function(userId){
            return $http.delete(URL_SERVICE+userId);
        };
        return service;
    });
