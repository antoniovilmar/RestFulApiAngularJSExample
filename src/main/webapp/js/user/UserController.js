app.controller('UserController', function($scope, $http, $routeParams) {

    $scope.user = {};
    $scope.mensagem = '';

    if ($routeParams.userId) {
        $http.get('http://localhost:8080/user/' + $routeParams.userId)
            .success(function(user) {
                $scope.user = user;
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter o usuário'
            });
    }

    $scope.submeter = function() {

        if ($scope.formulario.$valid) {
            if ($routeParams.userId) {
                $http.put('http://localhost:8080/user/'+$scope.user.id, $scope.user)
                    .success(function() {
                        $scope.mensagem = 'Usuário atualizado com sucesso';
                    })
                    .error(function(erro) {
                        $scope.mensagem = 'Não foi possível atualizar o Usuário';
                    })
            } else {
                $http.post('http://localhost:8080/user/', $scope.user)
                    .success(function() {
                        $scope.user = {};
                        $scope.mensagem = 'Usuário adicionado com sucesso';
                    })
                    .error(function(erro) {
                        $scope.mensagem = 'Não foi possível cadastrar o Usuário';
                    })
            }
        }
    };

});
