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

            function findBiggestZIndex(stickyNotes) {
                var result = 0;
                for (var i = 0, count = stickyNotes.length; i < count; i++) {
                    result = Math.max(result, stickyNotes[i].zIndex);
                }
                return result;
            }

            function putStickyNoteOnTop(focusedStickyNote) {
                var stickyNotes = $scope.stickies;
                var biggestZIndex = findBiggestZIndex(stickyNotes);
                if (focusedStickyNote.zIndex !== biggestZIndex) {
                    for (var i = 0, count = stickyNotes.length; i < count; i++) {
                        var stickyNote = stickyNotes[i];
                        if (stickyNote !== focusedStickyNote && stickyNote.zIndex > focusedStickyNote.zIndex) {
                            stickyNote.zIndex--;
                        }
                    }
                    focusedStickyNote.zIndex = biggestZIndex;
                }
            }

            $scope.mouseDown = function (stickyNote) {
                putStickyNoteOnTop(stickyNote);
            };

        }
    };

});