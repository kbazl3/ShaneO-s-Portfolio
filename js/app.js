angular.module("portfolio", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("home", {
                url:"/",
                templateUrl:"views/home.html"
            })

            .state("originals", {
                url:"/originals",
                templateUrl:"views/originals.html"
            })

            .state("contact", {
                url:"/contact",
                templateUrl:"views/contact.html"
            })

            .state("tattoos1", {
                url:"/tattoos/page1",
                templateUrl:"views/tattoos/page1.html",
                controller: "tattoosCtrl"
            })

            .state("tattoos2", {
                url:"/tattoos/page2",
                templateUrl:"views/tattoos/page2.html",
                controller: "tattoosCtrl"
            })

            .state("tattoos3", {
                url:"/tattoos/page3",
                templateUrl:"views/tattoos/page3.html",
                controller: "tattoosCtrl"
            })

            .state("tattoos4", {
                url:"/tattoos/page4",
                templateUrl:"views/tattoos/page4.html",
                controller: "tattoosCtrl"
            })

            .state("tattoos5", {
                url:"/tattoos/page5",
                templateUrl:"views/tattoos/page5.html",
                controller: "tattoosCtrl"
            })

    })
