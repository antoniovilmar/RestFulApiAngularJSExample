app.controller('UsersController', function($scope, $http, UserService) {

    $scope.users = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    UserService.getAll()
        .success(function(user) {
            $scope.users = user;
        })
        .error(function(erro) {
            $scope.mensagem = 'Não foi possível carregar usuários ';
        });

    $scope.remover = function(user) {

        UserService.deleteById(user.id)
            .success(function() {
                var indiceDoUser = $scope.users.indexOf(user);
                $scope.users.splice(indiceDoUser, 1);
                $scope.mensagem = 'Usuário ' + user.name + ' removido com sucesso!';

            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível apagar o Usuário ' + user.name;
            });

    }
});
