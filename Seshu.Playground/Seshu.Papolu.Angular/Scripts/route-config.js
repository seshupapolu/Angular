(function (app) {
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("firstMessage", {
            url: "/first-msg",
            templateUrl: "Templates/first.html",
            controller: "firstController"
        })
        .state("secondMessage", {
            url: "/first-msg",
            templateUrl: "Templates/first.html",
            controller: "firstController"
        })

    }]);

})(angular.module("routeModule"))