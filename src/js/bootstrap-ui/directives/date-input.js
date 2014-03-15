angular.module("bootstrap-ui").directive("dateInput", function () {


    function extractYears(k) {
        var result = [];
        var year = (new Date()).getFullYear();
        while (k--) {
            result.push({label: year, value: year});
            year--;
        }
        return result;
    }

    function extractMonths() {
        var result = [];
        var year = (new Date()).getFullYear();
        while (k--) {
            result.push({label: year, value: year});
            year--;
        }
        return result;
    }

    return {
        restrict: "A",
        templateUrl: "/templates/bootstrap-ui/directives/date-input.template.html",
        scope: {
            date: "=dateInput"
        },
        link: function (scope, element, attribute) {
            scope.years = extractYears(10);
            scope.months = extractMonths();
        }
    };

});