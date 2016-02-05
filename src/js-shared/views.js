(function(){
    "use strict";
    angular.module("PortfolioApplication")
        .constant("views", {
            homepage: {
                navigationName: "Home",
                name: "homepage",
                url: "/homepage",
                views: {
                    navigation: {
                        templateUrl: "./components/navigation.html",
                        controller: "NavigationController as navigation"
                    },
                    content: {
                        templateUrl: "./components/homepage.html",
                        controller: "HomepageController as homepage"
                    }
                }
            }
        });
}());