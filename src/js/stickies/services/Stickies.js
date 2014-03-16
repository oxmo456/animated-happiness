angular.module("stickies").service("Stickies", function Stickies(StickiesStorage) {

    var STICKY_NOTES_THEMES = [
        {name: "Post-It", id: "post-it"},
        {name: "Blue", id: "blue"},
        {name: "Red", id: "red"},
        {name: "Green", id: "green"},
        {name: "Black", id: "black"}
    ];

    var DEFAULT_THEME_ID = STICKY_NOTES_THEMES[0].id;

    var stickyNotes;

    function saveStickies(stickyNotes) {
        StickiesStorage.save(stickyNotes);
    }

    function initialize() {
        stickyNotes = StickiesStorage.load();
        if (!stickyNotes) {
            var stickyNote = createStickyNote(0);
            stickyNote.text = "Hello mate1 : )";
            stickyNotes = [stickyNote];
            StickiesStorage.save(stickyNotes);
        }
    }

    function createStickyNote(zIndex) {

        return {
            text: "",
            zIndex: zIndex,
            themeId: DEFAULT_THEME_ID,
            date: (new Date()).getTime(),
            position: {
                x: 0,
                y: 0
            }
        };
    }

    this.save = function () {
        saveStickies(stickyNotes);
    };

    this.addStickyNote = function () {
        stickyNotes.push(createStickyNote(stickyNotes.length));
    };

    this.deleteAllStickyNotes = function () {
        stickyNotes.length = 0;
    };

    this.deleteStickyNote = function (stickyNote) {
        var index = stickyNotes.indexOf(stickyNote);
        if (index !== -1) {
            stickyNotes.splice(index, 1);
        }
    };

    this.getStickyNotesThemes = function () {
        return STICKY_NOTES_THEMES;
    };

    this.getData = function () {
        return stickyNotes;
    };

    initialize();

});