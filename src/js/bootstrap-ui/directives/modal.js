angular.module("bootstrap-ui").directive("modal", function ($templateCache) {

    var MODAL = "modal";

    return {
        restrict: "A",
        templateUrl: "/templates/bootstrap-ui/directives/modal.template.html",
        replace: true,
        controller: function ($scope, $attrs) {

            function initialize() {
                var publishName = $attrs[MODAL];
                if (angular.isDefined($scope[publishName])) {
                    throw new Error("Oops...");
                }
                $scope[publishName] = this;
            }

            this.show = function (context, templateId) {
                console.log("SHOW", context, templateId);

                var template = $templateCache.get(templateId);



                console.log("???", template);

            };

            initialize.bind(this)();

        },
        link: function (scope, element, attrs) {
            console.log("... POPO");


        }
    };

});