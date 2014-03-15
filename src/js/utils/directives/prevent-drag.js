angular.module("utils").directive("preventDrag", function ($window) {

    var windowElement = angular.element($window);

    return {
        restrict: "A",
        link: function (scope, element, attribute) {

            function elementMouseDown(event) {
                event.stopImmediatePropagation();
            }

            element.on("mousedown", elementMouseDown);


            element.on("$destroy", function () {
                element.off("mousedown", elementMouseDown);
                element.off("$destroy", arguments.callee);
            });

        }
    };

});