angular.module("portfolio")
    .controller("tattoosCtrl", function($scope, tattooSvc) {


        $scope.tattoos = tattooSvc.pics;
        console.log($scope.tattoos)


    })
