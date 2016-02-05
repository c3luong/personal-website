(function(){
    "use strict";
    // declare app-level module
    angular.module('PortfolioApplication', ['ui.router', 'PublicModule']);
    // initialize sub-modules
    angular.module("PublicModule", ["ngAnimate", "ngMaterial", "ngAria"]);

}());