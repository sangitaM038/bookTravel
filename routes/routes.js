export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    require('../components/shubh-yatra/shubh-yatra.scss');
    var controller = require('../components/shubh-yatra/shubh-yatra');
    $urlRouterProvider.otherwise('/form');

    $stateProvider
        .state('form', {
            url: '/form',
            templateUrl: '../components/shubh-yatra/form.html',
            controller: controller
        })
        .state('form.main', {
            url: '/main',
            templateUrl: '../components/shubh-yatra/mainPage.html'
        })
        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/stepOne)
        .state('form.stepOne', {
            url: '/stepOne',
            templateUrl: '../components/shubh-yatra/step-one.html'
        })

        // url will be /form/stepTwo
        .state('form.stepTwo', {
             url: '/stepTwo',
            templateUrl: '../components/shubh-yatra/step-two.html',
        })

        // url will be /form/stepThree
        .state('form.stepThree', {
             url: '/stepThree',
            templateUrl: '../components/shubh-yatra/step-three.html',
        });
}