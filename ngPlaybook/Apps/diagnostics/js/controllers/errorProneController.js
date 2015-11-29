(function(module) {

    var errorProneController = function (alerting, $http) {

        var model = this;

        model.alertTypes = alerting.alertTypes;
        model.alertType = alerting.alertTypes[0];
        model.alertMessage = "";      

        model.createAlert = function () {
            alerting.addAlert(model.alertType, model.alertMessage);
            model.alertType = alerting.alertTypes[0];
            model.alertMessage = "";
        };

        model.throwException = function () {
            throw new Error("Dooms day is coming!");
        };

        $http.get("/api/slow")
        .then(function () {
        }).catch(function () { });
              
    };

    module.controller("errorProneController", errorProneController);

}(angular.module("diagnostics")))