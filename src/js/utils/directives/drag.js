angular.module("utils").directive("drag", function ($window) {

    var MOUSE_LEFT_BUTTON = 0;
    var DRAGGED = "dragged";
    var windowElement = angular.element($window);
    var MOUSE_DOWN = "mousedown";
    var MOUSE_UP = "mouseup";
    var MOUSE_MOVE = "mousemove";
    var DRAG_START = "drag_start";
    var DRAG_END = "drag_end";

    return {
        restrict: "A",
        require: "positionable",
        link: function (scope, element, attrs, positionableController) {
            var mouseX;
            var mouseY;
            var dx;
            var dy;
            var animationFrameRequestId;

            function initialize() {
                element.on(MOUSE_DOWN, elementMouseDown);
            }

            function windowMouseMove(event) {
                dx = event.clientX - mouseX;
                dy = event.clientY - mouseY;
                mouseX = event.clientX;
                mouseY = event.clientY;
                animationFrameRequestId = $window.requestAnimationFrame(update);
            }

            function update() {
                scope.$apply(function () {
                    positionableController.increasePositionX(dx);
                    positionableController.increasePositionY(dy);
                });
            }

            function windowElementMouseUp() {
                element.removeClass(DRAGGED);
                $window.cancelAnimationFrame(animationFrameRequestId);
                windowElement.off("mousemove", windowMouseMove);
                windowElement.off("mouseup", windowElementMouseUp);
            }

            function elementMouseDown(event) {
                if (event.button === MOUSE_LEFT_BUTTON) {
                    event.preventDefault();
                    element.addClass(DRAGGED);
                    mouseX = event.clientX;
                    mouseY = event.clientY;
                    animationFrameRequestId = $window.requestAnimationFrame(update);
                    windowElement.on(MOUSE_MOVE, windowMouseMove);
                    windowElement.on(MOUSE_UP, windowElementMouseUp);
                }
            }

            initialize();

        }
    };

});