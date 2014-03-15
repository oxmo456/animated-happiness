angular.module("bootstrap-ui").directive("dateInput", function ($locale) {


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
        var months = $locale.DATETIME_FORMATS.MONTH;
        for (var i = 0, count = months.length; i < count; i++) {
            var month = months[i];
            result.push({value: i, label: month});
        }
        return result;
    }

    function extractDays() {
        var result = [];
        var k = 31;
        while (k--) {
            result.push({value: k, label: k});
        }
        return result;
    }

    var YEARS = extractYears(10);
    var MONTHS = extractMonths();
    var DAYS = extractDays();


    return {
        restrict: "A",
        templateUrl: "/templates/bootstrap-ui/directives/date-input.template.html",
        scope: {
            date: "=dateInput"
        },
        link: function (scope, element, attribute) {
            scope.years = YEARS;
            scope.months = MONTHS;
            scope.days = DAYS;


            scope.year = scope.date.getFullYear();
            scope.month = scope.date.getMonth();
            scope.day = scope.date.getDate();

        }
    };

});