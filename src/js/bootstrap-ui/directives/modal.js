angular.module("bootstrap-ui").directive("modal", function () {

    return {
        restrict: "A",
        templateUrl: "/templates/bootstrap-ui/directives/modal.template.html",
        replace: true,
        scope: {
        },
        controller: function ($scope) {

            this.show = function (context, templateId) {
                console.log("SHOW", context, templateId);
            };

        },
        link: function (scope, element, attrs) {
            console.log("...");


        }
    };

});