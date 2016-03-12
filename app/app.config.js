angular
    .module('app')
    .config(config);

function config ($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('/assets/css/mdi.svg');
}