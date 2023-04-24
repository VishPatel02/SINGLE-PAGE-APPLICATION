var app = angular.module("myweb", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/g1", { templateUrl: "views/g1.html" })
      .when("/g2", { templateUrl: "views/g2.html" })
      .when("/g3", { templateUrl: "views/g3.html" })
      .when("/g4", { templateUrl: "views/g4.html" })
      .when("/g5", { templateUrl: "views/g5.html" })
      .otherwise({ redirectTo: "P_index.html" });
  },
]);

app.controller("mycontrol", function () {});
