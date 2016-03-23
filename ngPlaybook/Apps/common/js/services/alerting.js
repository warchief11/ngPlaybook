(function (module) {

    var alerting = function ($timeout) { 

        var currentAlerts = [];
        var alertTypes = ["Success", "Danger", "Warning", "Info"];

        var addAlert = function (type, message) {
            var alert = { type: type, message: message };
            currentAlerts.push(alert);
            $timeout(function () { removeAlert(alert) }, 5000);
        };

        var addError = function (message) {
            addAlert("Danger", message);
        };

        var addWarning = function (message) {
            addAlert("Warning", message);
        };

        var addInfo = function (message) {
            addAlert("Info", message);
        };

        var addSuccess = function (message) {
            addAlert("Success", message);
        };

        var removeAlert = function (alert) {
            for (var i in currentAlerts) {
                if (alert === currentAlerts[i]) {
                    currentAlerts.splice(i, 1);
                }
            }
        };

        return {
            addAlert: addAlert,
            addError: addError,
            addWarning: addWarning,
            addInfo: addInfo,
            addSuccess: addSuccess,
            currentAlerts: currentAlerts,
            alertTypes: alertTypes,
            removeAlert : removeAlert
        };
    };

    module.factory("alerting", alerting);

})(angular.module("common"));
