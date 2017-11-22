(function (angular) {
    angular.module('xen3r0.jenkins')
        .config(['$stateProvider', '$urlRouterProvider', config])
    ;

    /**
     * Configuration des routes
     * @param {Object} $stateProvider
     * @param {Object} $urlRouterProvider
     */
    function config($stateProvider, $urlRouterProvider) {
        // Page invalide
        $urlRouterProvider.otherwise('/home');

        $stateProvider
        // Route principale abstraite
            .state('jenkins', {
                abstract: true,
                template: require('../views/content.html')
            })

            // Login
            .state('login', {
                url: '/login',
                template: require('../views/login.html'),
                params: {
                    toState: null,
                    toParams: null
                }
            })

            // HOME
            .state('jenkins.home', {
                url: '/home',
                views: {
                    'content@jenkins': {
                        template: require('../views/home.html')
                    }
                }
            })

            // RISQUES
            .state('jenkins.risques', {
                url: '/risques',
                redirectTo: 'jenkins.risques.evaluations'
            })
            .state('jenkins.risques.evaluations', {
                url: '/evaluations',
                views: {
                    'content@jenkins': {
                        template: require('../views/evaluations.html')
                    }
                }
            })
            // On considère que c'est l'ancienne route ui router angularjs
            // et qui est remplacer par celle qui est dans src/app/components/risques/risques.states.ts
            // .state('jenkins.risques.evaluations.view', {
            //     url: '/view/:contexteId/:entiteId',
            //     views: {
            //         'content@jenkins': {
            //             template: require('../components/risques/evaluations/evaluations-details/evaluations-details.component.html')
            //         }
            //     }
            // })
        ;
    }
})
(angular);