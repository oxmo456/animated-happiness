angular.module("utils").service("JsonLocalStorage", function ($window) {

    var localStorage = $window.localStorage;

    this.setItem = function (key, value) {
        if (angular.isDefined(value)) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };

    this.getItem = function (key) {
        var result;
        try {
            result = JSON.parse(localStorage.getItem(key));
        } catch (e) {
            result = null;
        }
        return result === null ? undefined : result;
    };

    this.removeItem = function (key) {
        localStorage.removeItem(key);
    };

});
