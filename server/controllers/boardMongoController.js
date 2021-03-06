var helpers = require('../util/helpers.js');
var Board = require('../models/boardMongo.js');
var User = require('../models/userMongo.js');
var https = require('https');
var _ = require('underscore');

exports.createBoard = function(req, res) {
  var currentUser = {
    uid: req.body.uid,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    image: req.body.image
  };
  var board = new Board({
    createdBy: currentUser,
    boardname: req.body.boardname,
    boardMembers: [currentUser]
  });
  board.save(function(err) {
    if (err) {
      throw err;
    }
    res.send(board);
  });
};
exports.getBoards = function(req, res) {
  Board.find({boardMembers: req.body.boardmembers}, function(err, boards) {
    if (err) {
      throw err;
    }

    console.log('all your boards are: ', boards);
    res.send(boards);
  });
};
exports.updateBoard = function(req, res) {
  
};
