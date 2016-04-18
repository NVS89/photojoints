(function () {
    'use strict';

    angular
        .module('userApp')
        .controller('validController', validController);

    validController.$inject = ['$scope'];

    function validController($scope) {
        $scope.submitForm = function (isValid) {

            if (isValid) {
                alert('Success!!!');
            }
        };
    }
})();