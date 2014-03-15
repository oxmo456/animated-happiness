angular.module("app").controller("MainController", function ($scope, StickiesStorage) {


    function saveStickies(stickies) {
        StickiesStorage.save(stickies);
    }

    function stickiesChange(value, previousValue) {
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
            color: ""
        });
    };


    initialize();

});