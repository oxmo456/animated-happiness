angular.module("app").controller("MainController", function ($scope, Stickies) {

    function stickiesChange() {
        Stickies.save();
    }

    function initialize() {
        $scope.stickies = Stickies.getData();
        $scope.$watch("stickies", stickiesChange, true);
    }

    $scope.addStickyNote = function () {
        Stickies.addStickyNote();
    };

    $scope.editStickyNoteMeta = function (stickyNote) {
        $scope.modal.show({
            stickyNote: stickyNote,
            themes: Stickies.getStickyNotesThemes()
        }, "editStickyNoteModal");
    };

    $scope.deleteAllStickyNotes = function () {
        Stickies.deleteAllStickyNotes();
    };


    $scope.deleteStickyNote = function (stickyNote) {
        $scope.modal.show({confirm: function () {
            Stickies.deleteStickyNote(stickyNote);
        }
        }, "confirmDeletionModal");
    };

    initialize();

});