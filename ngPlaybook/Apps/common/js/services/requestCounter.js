(function(module) {

    var requestCounter = function ($q) {

        var activeCount = 0;

        var request = function (config) {
            activeCount += 1;
            return $q.when(config);
        };

        var response = function (response) {
            activeCount -= 1;
            return $q.when(response);
        };
        var requestError = function (error) {
            activeCount -= 1;
            return $q.reject(error);
        };
        var responsetError = function (error) {
            activeCount -= 1;
            return $q.reject(error);
        };

        var getRequestCount = function () {
            return activeCount;
        }
        
        return {
            request: request,
            response: response,
            requestError : requestError,
            responseError: responsetError,
            getRequestCount: getRequestCount
        };
    };

    module.factory("requestCounter", requestCounter);
    module.config(function ($httpProvider) {
        $httpProvider.interceptors.push("requestCounter");
    });
   
}(angular.module("common")));