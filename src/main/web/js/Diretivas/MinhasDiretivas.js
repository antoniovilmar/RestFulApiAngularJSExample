angular.module('MinhasDiretivas', []).directive('meuPainel', function() {

    var painel = {};
    painel.restrict = "AE";
    painel.transclude = true;
    painel.scope = {
        titulo: '@'
    };

    painel.templateUrl = 'meu-painel.html';

    return painel;

});
