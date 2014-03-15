angular.module("stickies").directive("stickyNote", function () {

    return {
        restrict: "A",
        templateUrl: "/templates/stickies/directives/sticky-note.template.html",
        replace: true,
        transclude: true,
        scope: {
            stickyNote: "="
        }
    };

});