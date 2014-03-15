angular.module("stickies").directive("stickyNote", function () {

    return {
        restrict: "A",
        templateUrl: "/templates/stickies/directives/sticky-note.template.html",
        replace: true,
        scope: {
            stickyNote: "="
        },
        link: function (scope, element, attribute) {

            scope.$on("drag_start", function (event, data) {
                console.log("drag start", data.scope());
            });

            scope.$on("drag_end", function (event, data) {
                console.log("drag end", data.scope());
            });

        }
    };

});