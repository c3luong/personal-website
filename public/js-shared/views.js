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
                        templateUrl: "./js-components/navigation/navigation.html",
                        controller: "NavigationController as navigation"
                    },
                    content: {
                        templateUrl: "./js-components/homepage/homepage.html",
                        controller: "HomepageController as homepage"
                    }
                }
            }
        })

}());