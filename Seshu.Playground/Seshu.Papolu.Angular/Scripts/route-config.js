(function (app) {
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("firstMessage", {
            url: "/first-msg",
            //templateUrl: "/Templates/first.html",
            template: "<div>This is first Msg</div>",
           // controller: "firstController"
        });
        //.state("secondMessage", {
        //    url: "/second-msg",
        //    //templateUrl: "/Templates/first.html",
        //    template: "<div>{{a}}<br/>{{b}}</div>",
        //    controller: "firstController"
        //})

    }]);

})(angular.module("routeModule"))