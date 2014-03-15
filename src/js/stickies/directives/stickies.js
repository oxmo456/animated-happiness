angular.module("stickies").directive("stickies", function () {

    return {
        restrict: "A",
        scope: {
            stickies: "="
        },
        templateUrl: "/templates/stickies/directives/stickies.template.html",
        replace: true
    };

});