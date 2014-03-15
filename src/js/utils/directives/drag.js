angular.module("utils").directive("drag", function ($window) {

    var MOUSE_LEFT_BUTTON = 0;
    var DRAGGED = "dragged";
    var windowElement = angular.element($window);

    return {
        restrict: "A",
        link: function (scope, element, attribute) {
            var mouseX;
            var mouseY;
            var x;
            var y;
            var animationFrameRequestId;

            function initialize() {
                x = element.css("left") || 0;
                y = element.css("top") || 0;
                element.on("mousedown", elementMouseDown);
            }


            function windowMouseMove(event) {
                var dx = event.clientX - mouseX;
                var dy = event.clientY - mouseY;
                mouseX = event.clientX;
                mouseY = event.clientY;
                x += dx;
                y += dy;
            }

            function update() {
                element.css("left", x + "px");
                element.css("top", y + "px");
                animationFrameRequestId = $window.requestAnimationFrame(update);
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
                    windowElement.on("mousemove", windowMouseMove);
                    windowElement.on("mouseup", windowElementMouseUp);
                }
            }


            initialize();

        }
    };

});