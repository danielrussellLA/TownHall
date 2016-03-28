TownHall.controller('cardModalCtrl', function($scope, $window, $state, $mdDialog, card) {

  $scope.card = card;
  $scope.comment = "";
  $scope.cardText = "";

  $scope.editCard = function(newValue) {
    $scope.cardText = newValue;
    card.text = $scope.cardText;
    // console.log(card.text);
  };

  // adds a logged-in user's comments to a particular card's comments array property'
  $scope.addComment = function(comment) {
    var user = JSON.parse(localStorage.getItem('userInfo'));
    // checks if user is logged in
    if(user && comment !== "") {
      // pushes the comment into the comments array
      card.comments.push({attachments: "", createdBy: user, text: comment});
      $scope.comment = "";
    } else if (comment === ""){
      // do nothing
    } else {
      // asks user to sign in if he is trying to comment without signing in
      var confirm = $mdDialog.confirm()
      .title('Please Sign In')
      .textContent('Something went wrong, you must be signed in to comment')
      .ariaLabel('Sign In')
      .ok('Sign In')
      .cancel('Cancel');
      $mdDialog.show(confirm).then(function() {
        $state.go('signin');
      });
    }
  };
});
