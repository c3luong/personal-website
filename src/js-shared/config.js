(function(){
    "use strict";
    angular.module("PortfolioApplication")
        .config(appConfig);

    appConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$mdThemingProvider", "$locationProvider", "views"];
    function appConfig($stateProvider, $urlRouterProvider, $mdThemingProvider, $locationProvider, views){
        $urlRouterProvider.otherwise("/homepage");
        $mdThemingProvider.theme('default').primaryPalette('green');
        // set up views
        angular.forEach(views, function(value){
            $stateProvider.state(value);
        });
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
}());

