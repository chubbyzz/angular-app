angular
    .module('app')
    .service('authenticateService', authenticateService);

authenticateService.$inject = ['$http', 'baseUrl'];

function authenticateService($http, baseUrl) {
    return {
        login: login
    };
    function login(user) {
        return $http.get(baseUrl + 'login', {user: user});
    }
}