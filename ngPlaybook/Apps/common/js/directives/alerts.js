(function(module) {

    var alerts = function (alerting) {
        return {
            restrict: "AE",
            templateUrl: "/apps/common/templates/alerts.html",
            scope: true, //creates a new scope for this directive.,
            link: function (scope) {
                scope.currentAlerts = alerting.currentAlerts;
            },
            controller: function ($scope) {
                $scope.removeAlert = function (alert) {
                    alerting.removeAlert(alert);
                }
            }
        }
    }
    module.directive("alerts", alerts);

})(angular.module("common"));