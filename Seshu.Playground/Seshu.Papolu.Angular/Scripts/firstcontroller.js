(function (app) {

    app.controller("firstController", ["$scope", function ($scope) {
        $scope.a = 25;
        $scope.b = 45;
    }]);

})(angular.module("routeModule"));