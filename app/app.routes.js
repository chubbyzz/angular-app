angular
    .module('app')
    .config(config);

function config ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/login/loginView.html'
        })

}