angular.module("app").controller("MainController", function ($scope, StickiesStorage) {


    function saveStickies(stickies) {
        StickiesStorage.save(stickies);
    }

    function stickiesChange(value) {
        saveStickies(value);
    }

    function initialize() {
        var stickies = StickiesStorage.load();
        if (!stickies) {
            stickies = [];
            StickiesStorage.save(stickies);
        }
        $scope.stickies = stickies;
        $scope.$watch("stickies", stickiesChange, true);
    }

    $scope.addStickyNote = function () {
        $scope.stickies.push({
            text: "",
            color: "",
            position: {
                x: 0,
                y: 0
            }
        });
    };

    $scope.editStickyNoteMeta = function (stickyNote) {
        $scope.modal.show({stickyNote: stickyNote}, "editStickyNoteModal");
    };

    $scope.deleteStickyNote = function (stickyNote) {
        console.log("delete", stickyNote);
    };

    initialize();

});