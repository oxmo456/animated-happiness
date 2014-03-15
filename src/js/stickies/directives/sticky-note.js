angular.module("stickies").directive("stickyNote", function () {

    return {
        restrict: "A",
        templateUrl: "/templates/stickies/directives/sticky-note.template.html",
        replace: true,
        scope: {
            stickyNote: "="
        },
        require: "stickies",
        link: function (scope, element, attrs, stickiesController) {

            element.on("click", function () {
                stickiesController.setSelectedStickyNote(scope.stickyNote);
            });

        }
    };

});