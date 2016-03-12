angular
    .module('app')
    .config(config);

function config ($httpProvider) {
    $httpProvider.interceptors.push(AuthMiddleware);

    AuthMiddleware.$injection = ['$localStorage', 'tokenType'];

    function AuthMiddleware($localStorage, tokenType) {
        return {
            "request" : refreshToken
        }

        function refreshToken(config) {
            config.headers = config.headers || {};
            if ($localStorage.token) {
                config.headers.Authorization = tokenType + " " + $localStorage.token;
            }
            return config;
        }
    }

}