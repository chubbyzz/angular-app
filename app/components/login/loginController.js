'use static';

angular
    .module('app')
    .controller('Login', Login);

Login.$injection = ['authenticateService', '$localStorage', '$location'];

function Login(authenticateService, $localStorage, $location) {
    var vm = this;

    vm.login = login;

    function login() {
        authenticateService.login(vm.user)
            .then(function(response){
                $localStorage.token = response.data.token;
                $location.path("/users");
            });
    }
}

