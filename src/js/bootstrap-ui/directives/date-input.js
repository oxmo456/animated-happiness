angular.module("bootstrap-ui").directive("dateInput", function ($locale) {

    var INVALID_DATE = "Invalid Date";

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

    function dateIsValid(date) {
        return date && date.toString() !== INVALID_DATE;
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
        link: function (scope) {

            function initialize() {
                scope.years = YEARS;
                scope.months = MONTHS;
                scope.days = DAYS;
                var date = new Date(scope.date);
                if (dateIsValid(date)) {
                    scope.year = date.getFullYear();
                    scope.month = date.getMonth();
                    scope.day = date.getDate();
                }
                scope.$watch("year", updateDate);
                scope.$watch("month", updateDate);
                scope.$watch("day", updateDate);
            }


            function updateDate() {
                var newDate = new Date(scope.year, scope.month, scope.day);
                scope.validDate = dateIsValid(newDate);
                if (scope.validDate) {
                    scope.date = new Date(scope.year, scope.month, scope.day).toString();
                }
            }

            initialize();

        }
    };

});