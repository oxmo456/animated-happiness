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

                console.log("mousedown...", stickyNote);

                var stickyNoteZIndex = stickyNote.zIndex;


                var biggestZindex = 0;
                for (var i = 0, count = $scope.stickies.length; i < count; i++) {
                    var stickyNote = $scope.stickies[i];
                    console.log(stickyNote);
                    biggestZindex = Math.max(biggestZindex, stickyNote.zIndex);
                    stickyNote.zIndex--;
                }
                stickyNote.zIndex = biggestZindex;
                console.log($scope.stickies);


            };

        }
    };

});