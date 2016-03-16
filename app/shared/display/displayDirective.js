'use static';

angular
    .module('app')
    .directive('appDisplay', AppDisplay);

function AppDisplay() {
    var directive = {
        restrict: "E",
        templateUrl: "/app/shared/display/displayView.html",
        scope: {
            display: "=",
            afterShow: "=",
            afterHide: "="
        },
        transclude: true,
    }
    return directive;
}