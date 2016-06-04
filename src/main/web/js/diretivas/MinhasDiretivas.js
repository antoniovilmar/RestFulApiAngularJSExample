angular.module('minhasDiretivas', []).directive('meuPainel', function() {

    var painel = {};
    painel.restrict = "AE";
    painel.transclude = true;
    painel.scope = {
        titulo: '@'
    };

    painel.templateUrl = 'js/diretivas/meu-painel.html';

    return painel;

});
