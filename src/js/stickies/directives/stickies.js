angular.module("stickies").directive("stickies", function () {

    return {
        restrict: "A",
        scope: {
            stickies: "="
        },
        templateUrl: "/templates/stickies/directives/stickies.template.html",
        replace: true,
        controller: function stickies($scope, $element, $attrs) {


            this.setSelectedStickyNote = function (sticky) {
                console.log(sticky);
            };


            console.log("link...");
        }
    };

});