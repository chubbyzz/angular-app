angular
    .module('app')
    .service('authenticateService', authenticateService);

authenticateService.$inject = ['$http'];

function authenticateService($http) {
    return {
        login: login
    };
    function login(user) {
        return $http.post('/login', {user: user});
    }
}