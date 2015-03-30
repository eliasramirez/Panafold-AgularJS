
angular.module('submitInfo', [])
  .controller('formController', ['$scope',
    function($scope) {
      $scope.list = "";
      $scope.list2 = "";
      $scope.submit = function() {
        if ($scope.name && $scope.email) {
          $scope.list = $scope.name;
          $scope.list2 = $scope.email;
          $scope.name = '';
          $scope.email = '';
        }
      };
    }
  ]);