TownHall.controller('profileCtrl', function($scope, Auth, $state, dataFactory) {
  $scope.boards = [{board_id: 1, boardName: 'board1'}, {board_id: 3, boardName: 'board3'}, {board_id: 7, boardName: 'board7'}];
  $scope.signout = function() {
    Auth.signout();
    $state.go('signin');
  };

  $scope.loadBoard = function(board) {
    var boardID = board.board_id;
    sessionStorage.setItem('boardID', boardID);
    dataFactory.loadBoard(board, function(fetchedData) {
      $state.go('dashboard', {obj: fetchedData});
    });
  };

  $scope.createNewBoard = function() {
    console.log('createNewBoard firing');
    dataFactory.createBoard();
  };

});
