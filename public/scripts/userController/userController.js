(function () {
    'use strict';

    angular
        .module('userApp')
        .controller('userListController', userListController)
        .controller('userAddController', userAddController)
        .controller('userEditController', userEditController)
        .controller('userDeleteController', userDeleteController);

    //Add List controller
    userListController.$inject = ['$scope', 'User'];

    function userListController($scope, User) {
        refreshUsers($scope, User);
    }

    function refreshUsers($scope, User) {
        $scope.users = User.query();
    }

    //Add Create new user controller
    userAddController.$inject = ['$scope', "$location", 'User'];

    function userAddController($scope, $location, User) {
        $scope.user = new User();
        $scope.add = function () {
            $scope.user.$save(function () {
                refreshUsers($scope.$parent, User);
                $location.path('/home');
            });
        };
    }

    //Add Edit existing users controller
    userEditController.$inject = ['$scope', '$stateParams', '$location', 'User'];

    function userEditController($scope, $stateParams, $location, User) {
        $scope.user = User.get({ id: $stateParams.id });
        $scope.edit = function () {
            $scope.user.$save(function () {
                refreshUsers($scope.$parent, User);
                $location.path('/home');
            });
        };
    }

    //Add Delete controller
    userDeleteController.$inject = ['$scope', '$stateParams', '$location', 'User'];

    function userDeleteController($scope, $stateParams, $location, User) {
        $scope.user = User.get({ id: $stateParams.id });
        $scope.remove = function () {
            $scope.user.$remove({ _id: $scope.user.Id }, function () {
                refreshUsers($scope.$parent, User);
                $location.path('/home');
            });
        };
    }
})();