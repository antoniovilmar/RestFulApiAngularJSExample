app.controller('UserController', function($scope, $http) {

    $scope.user = {};
    $scope.mensagem='';
    $scope.submeter = function() {

        if ($scope.formulario.$valid) {
            $http.post('http://localhost:8080/user/', $scope.user)
                .success(function() {
                    $scope.user = {};
                    $scope.mensagem = 'Usuário adicionado com sucesso';
                })
                .error(function(erro) {
                    $scope.mensagem = 'Não foi possível cadastrar o Usuário';
                })
        }
    };

});
