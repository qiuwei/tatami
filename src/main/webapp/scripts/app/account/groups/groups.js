'use strict';

tatamiJHipsterApp
    .config(function ($stateProvider) {
        $stateProvider
            .state('groups', {
                templateUrl: 'scripts/app/account/groups/groups.html',
                controller: 'GroupsController',

                parent: 'account',
                url: '/groups',

                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'global.menu.account.groups'
                }
            })
    });