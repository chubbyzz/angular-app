'use static';

angular
    .module('app')
    .directive('appListItem', AppListItem);

function AppListItem() {
    var directive = {
        restrict: "E",
        templateUrl: "/app/shared/list-item/listItemView.html",
        scope: {
            record : "=",
            actions : "="
        }
    }
    return directive;
}
