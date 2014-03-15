angular.module("stickies").directive("stickies", function () {

    return {
        restrict: "A",
        scope: {
            stickies: "="
        },
        templateUrl: "/templates/stickies/directives/stickies.template.html",
        replace: true,
        controller: function stickies($scope, $element, $attrs) {


            $scope.putStickyNoteOnTop = function (stickyNoteIndex) {
                var stickyNote = $scope.stickies.splice(stickyNoteIndex, 1)[0];
                $scope.stickies.unshift(stickyNote);
                var n = 0;
                angular.forEach($scope.stickies, function (stickyNote) {
                    stickyNote.zIndex = n++;
                });
            };


        }
    };

});