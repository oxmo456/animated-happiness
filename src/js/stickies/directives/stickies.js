angular.module("stickies").directive("stickies", function () {

    return {
        restrict: "A",
        scope: {
            stickies: "=",
            onEditStickyNoteMeta: "&",
            onDeleteStickyNote: "&"
        },
        templateUrl: "/templates/stickies/directives/stickies.template.html",
        replace: true,
        controller: function ($scope) {

            $scope.mouseDown = function (stickyNote) {
                console.log(stickyNote);
            };

        }
    };

});