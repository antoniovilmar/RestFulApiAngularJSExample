app.controller('UsersController', function($scope, $http) {

    $scope.users = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    var promise = $http.get('http://localhost:8080/user/');
    promise.then(function(retorno) {
            $scope.users = retorno.data;
        })
        .catch(function(erro) {
            console.log(erro)
        });

    $scope.remover = function(user) {

        $http.delete('http://localhost:8080/user/' + user.id)
            .success(function() {
                var indiceDoUser = $scope.users.indexOf(user);
                $scope.users.splice(indiceDoUser, 1);
                $scope.mensagem = 'Usuário ' + user.name + ' removido com sucesso!';

            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível apagar o Usuário ' + user.name
            });

    }
});
