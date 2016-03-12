'use static';

angular
    .module('app')
    .controller('Login', Login);

Login.$injection = ['authenticateService'];

function Login(authenticateService) {
    var vm = this;

    vm.login = login;

    function login() {
        authenticateService.login(vm.user)
            .then();
    }
}

