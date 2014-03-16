angular.module("app").controller("MainController", function ($scope, StickiesStorage) {

    var STICKY_NOTES_THEMES = [
        {name: "Post-It", id: "post-it"},
        {name: "Blue", id: "blue"},
        {name: "Red", id: "red"},
        {name: "Green", id: "green"},
        {name: "Black", id: "black"}
    ];

    var DEFAULT_THEME_ID = STICKY_NOTES_THEMES[0].id;

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
        var zIndex = $scope.stickies.length;
        $scope.stickies.push({
            text: "",
            zIndex: zIndex,
            themeId: DEFAULT_THEME_ID,
            date: (new Date()).toISOString(),
            position: {
                x: 0,
                y: 0
            }
        });
    };

    $scope.editStickyNoteMeta = function (stickyNote) {
        $scope.modal.show({
            stickyNote: stickyNote,
            themes: STICKY_NOTES_THEMES
        }, "editStickyNoteModal");
    };

    $scope.deleteAllStickyNotes = function () {
        $scope.stickies = [];
    };

    $scope.deleteStickyNote = function (stickyNote) {
        $scope.modal.show({confirme: function () {
            var index = $scope.stickies.indexOf(stickyNote);
            if (index !== -1) {
                $scope.stickies.splice(index, 1);
            }
        }
        }, "confirmDeletionModal");

    };

    $scope.colors = STICKY_NOTES_THEMES;

    initialize();

});