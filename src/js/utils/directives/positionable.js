angular.module("utils").directive("positionable", function ($parse) {

    var POSITION_X_ATTRIBUTE = "px";
    var POSITION_Y_ATTRIBUTE = "py";
    var PX = "px";
    var POSITION_X_DEFAULT_VALUE = 0;
    var POSITION_Y_DEFAULT_VALUE = 0;


    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            var pxGetter;
            var pxSetter;
            var pyGetter;
            var pySetter;

            function positionXChange(value) {
                console.log("x change...", value);
                element.css("left", value + PX);
            }

            function positionYChange(value) {
                console.log("y change...", value);
                element.css("top", value + PX);
            }

            function initialize() {
                var positionXExpression = attrs[POSITION_X_ATTRIBUTE];
                var positionYExpression = attrs[POSITION_Y_ATTRIBUTE];
                pxGetter = $parse(positionXExpression);
                pxSetter = pxGetter.assign;
                pyGetter = $parse(positionYExpression);
                pySetter = pyGetter.assign;
                if (angular.isUndefined(pxGetter(scope))) {
                    pxSetter(scope, POSITION_X_DEFAULT_VALUE);
                }
                if (angular.isUndefined(pyGetter(scope))) {
                    pySetter(scope, POSITION_Y_DEFAULT_VALUE);
                }
                scope.$watch(positionXExpression, positionXChange);
                scope.$watch(positionYExpression, positionYChange);
            }

            initialize();

        }
    };

});