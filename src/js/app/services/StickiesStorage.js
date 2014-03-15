angular.module("app").service("StickiesStorage", function (JsonLocalStorage) {

    var STICKIES_STORAGE_KEY = "stickies";

    this.save = function (stickies) {
        JsonLocalStorage.setItem(STICKIES_STORAGE_KEY, stickies);
    };

    this.load = function () {
        return JsonLocalStorage.getItem(STICKIES_STORAGE_KEY);
    };

});
