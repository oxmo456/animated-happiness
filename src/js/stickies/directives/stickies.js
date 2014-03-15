angular.module("stickies").directive("stickies", function () {

    return {
        restrict: "A",
        scope: {
            stickies: "=",
            onEditStickyNote: "&",
            onDeleteStickyNote: "&"
        },
        templateUrl: "/templates/stickies/directives/stickies.template.html",
        replace: true,
        controller: function ($scope) {

        }
    };

});