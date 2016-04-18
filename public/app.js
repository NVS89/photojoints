(function () {
    'use strict';

    angular.module('userApp', [
        'userServices',
        'ui.router',
        'ngMessages'
    ]).config(config);


    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/auth/authorise');

        $stateProvider
            .state('auth', {
                url: '/auth',
                templateUrl: 'autentication/auth_layout.html',
                controller: 'validController'
            })
            .state('auth.authorise', {
                url: '/authorise',
                templateUrl: 'autentication/authorisation.html',
                controller: 'validController'
            })
            .state('auth.regist', {
                url: '/regist',
                templateUrl: 'autentication/registration.html',
                controller: 'validController'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'particle_view/list.html',
                controller: 'userListController'
            })
            .state('home.addNew', {
                url: '/add',
                templateUrl: 'particle_view/addNew.html',
                controller: 'userAddController'
            })
            .state('home.edit', {
                url: '/users/edit/:id',
                templateUrl: 'particle_view/edit.html',
                controller: 'userEditController'
            })
            .state('home.delete', {
                url: '/users/delete/:id',
                templateUrl: 'particle_view/delete.html',
                controller: 'userDeleteController'
            });

        $locationProvider.html5Mode(true);
    }
})();
