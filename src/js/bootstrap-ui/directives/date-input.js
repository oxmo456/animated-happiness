angular.module("bootstrap-ui").directive("date", function () {

    return {
        restrict: "A",
        templateUrl: "/templates/bootstrap-ui/directives/date.template.html",
        scope: {
            date: "="
        },
        link: function (scope, element, attribute) {


        }
    };

});