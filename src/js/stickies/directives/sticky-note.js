angular.module("stickies").directive("stickyNote", function () {




    return {
        restrict: "A",
        templateUrl: "/templates/stickies/directives/sticky-note.template.html",
        replace: true,
        scope: {
            stickyNote: "="
        },
        link: function (scope, element, attrs) {



        }
    };

});