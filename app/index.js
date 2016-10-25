angular.module('traveling', [
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    require('../compositions/hello-world-module.js')
])
    .config(require('../routes/routes'))
    .constant('appName', 'traveling')
    .run(function ($rootScope, $log) {
        $rootScope.$on(function sessionExpiredListener() {
            $log.debug('session expired');
            // TODO: Node module for frame communication messages?
            // TODO: Domain checking
            top.postMessage('_SESSION_EXPIRED_', '*');
        });
    })
;