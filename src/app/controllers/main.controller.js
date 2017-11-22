(function (angular) {
    angular.module('xen3r0.jenkins')
        .controller('MainCtrl', controllerFn);

    controllerFn.$inject = ['$scope'];
    function controllerFn($scope) {
        $scope.user = {username: 'test'};
    }
})(angular);
