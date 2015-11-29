﻿(function(module) {

    module.config(function ($provide) {
        $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
            return function(exception, cause){
                $delegate(exception, cause);
                var alerting = $injector.get("alerting");
                alerting.addError(exception.message);
            }
        })
    });
    
}(angular.module("common")));