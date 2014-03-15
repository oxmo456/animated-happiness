angular.module("stickies").directive("stickyNote", function () {

    var MOUSE_DOWN = "mousedown";
    var FOCUSED = "focused";

    var elementOnTop = null;

    function giveFocusTo(element) {
        if (elementOnTop) {
            elementOnTop.removeClass(FOCUSED);
        }
        elementOnTop = element;
        elementOnTop.addClass(FOCUSED);
    }

    return {
        restrict: "A",
        templateUrl: "/templates/stickies/directives/sticky-note.template.html",
        replace: true,
        scope: {
            stickyNote: "=",
            onDelete: "&"
        },
        link: function (scope, element) {

            function elementMouseDown() {
                giveFocusTo(element);
            }

            element.on(MOUSE_DOWN, elementMouseDown);

        }
    };

});