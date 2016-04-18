(function () {
        'use strict';
        angular
            .module('userServices',['ngResource'])
            .factory('User', User);

        User.$inject = ['$resource'];

        function User($resource) {
                return $resource('/users/:id');
        }
})();