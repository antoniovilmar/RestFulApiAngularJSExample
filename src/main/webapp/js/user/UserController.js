app.controller('UserController', function($scope, $http, $routeParams, $location, UserService) {

    $scope.user = {};
    $scope.mensagem = '';

    if ($routeParams.userId) {
        UserService.getById($routeParams.userId)
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
                UserService.update($scope.user.id, $scope.user)
                    .success(function() {
                        $scope.mensagem = 'Usuário atualizado com sucesso';
                    })
                    .error(function(erro) {
                        $scope.mensagem = 'Não foi possível atualizar o Usuário';
                    })
            } else {
                UserService.save($scope.user)
                    .success(function() {
                        $scope.mensagem = 'Usuário adicionado com sucesso';
                        $location.path("/usuarios");
                    })
                    .error(function(erro) {
                        $scope.mensagem = 'Não foi possível cadastrar o Usuário';
                    })
            }
        }
    };

});
