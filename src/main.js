// selector variables

var board = document.getElementById("boardContainer");
var gameText = document.getElementById("gameText");
var gameGrid = document.getElementById("gameGrid");
var box = document.querySelectorAll("#box");
var winCounter1 = document.getElementById("winCounter1");
var winCounter2 = document.getElementById("winCounter2");

// global variables

var game = new Game();
var currentGrid = [];
var currentPlayer = 

// event listeners

window.addEventListener("DOMContentLoaded", function() {
  game.instantiateNewGame();
});

box.addEventListener("click", function(event) {
  takeTurn(event);
  game.checkForWinner(event);
});

// handler functions

function takeTurn() {
  if (!this.target.value) {
    this.target.value = game.currentPlayer;
  }
  // add code to push or slice new value of box into currentGrid array
  // or just do the same but into game.board array
  // either way it has to be in game.board array before we run game.checkForWinner 
}

// helper functions