TownHall.controller('userImageModalCtrl', function($scope, $mdDialog, Auth, updateProfile) {
  $scope.url = '';

  $scope.updateImage = function(url) {
    var getAuth = Auth.getAuth();
    var user = {
      uid: getAuth.uid,
      image: url
    };
    updateProfile(user);
    $mdDialog.hide();
  };

  $scope.hideDialog = function() {
    $mdDialog.hide();
  };
});
