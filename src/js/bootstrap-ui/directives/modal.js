angular.module("bootstrap-ui").directive("modal", function ($templateCache, $compile) {

    var MODAL = "modal";

    return {
        restrict: "A",
        templateUrl: "/templates/bootstrap-ui/directives/modal.template.html",
        replace: true,
        controller: function ($scope, $element, $attrs) {
            var currentModalContent;
            var containerElement;

            function initialize() {
                var publishName = $attrs[MODAL];
                if (angular.isDefined($scope[publishName])) {
                    throw new Error("Oops...");
                }
                $scope[publishName] = this;
                containerElement = $element.children().children();
            }

            this.show = function (context, templateId) {
                var scope = $scope.$new(true);
                angular.forEach(context, function (value, key) {
                    scope[key] = value;
                });
                var template = $templateCache.get(templateId);
                var templateElement = angular.element(template);
                $compile(templateElement)(scope);
                containerElement.append(templateElement);
                currentModalContent = templateElement;

                console.log("???", $element);
            };

            initialize.bind(this)();

        },
        link: function (scope, element, attrs) {
            console.log("... POPO");


        }
    };

});