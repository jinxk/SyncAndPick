var app = angular.module('contactsSync', [ 'ngMaterial' ])
    .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
});