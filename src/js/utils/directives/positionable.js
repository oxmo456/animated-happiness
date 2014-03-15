angular.module("utils").directive("positionable", function ($parse) {

    var POSITION_X_ATTRIBUTE = "px";
    var POSITION_Y_ATTRIBUTE = "py";

    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            var pxGetter;
            var pxSetter;
            var pyGetter;
            var pySetter;

            function initialize() {
                pxGetter = $parse(attrs[POSITION_X_ATTRIBUTE]);
                pxSetter = pxGetter.assign;
                pyGetter = $parse(attrs[POSITION_Y_ATTRIBUTE]);
                pySetter = pxGetter.assign;
            }

            initialize();

        }
    };

});