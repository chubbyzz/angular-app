'use static';

angular
    .module('app')
    .factory('userFactory', userFactory);

userFactory.$inject = ['$http', 'baseUrl'];

function userFactory($http, baseUrl) {
    return {
        all: all,
        create: create,
        findByEmail: findByEmail,
        edit: edit,
        remove: remove
    };

    function all(){
        return $http.get(baseUrl + "users");
    }
    function create(user){
        return $http.post(baseUrl + 'users', user);
    }
    function findByEmail(email){
        console.log(email);
        return $http({
            url: baseUrl + 'users',
            method: 'get',
            params: {email_like: email}
        });
    }
    function edit(id, user){
        return $http.put(baseUrl + "users/" + id , user);
    }

    function remove(id) {
        return $http.delete(baseUrl + "users/" + id);
    }
}