// selector variables

var center = document.getElementById("center");
var gameDisplay = document.getElementById("gameText");
var gameGrid = document.getElementById("gameGrid");
// var box = document.querySelectorAll("#box");
var p1WinsDisplay = document.getElementById("winCounter1");
var p2WinsDisplay = document.getElementById("winCounter2");

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

// global variables

var game;

// event listeners

window.addEventListener("DOMContentLoaded", startNewGame);

gameGrid.addEventListener("click", function(event) {
  takeTurn(event);
});

// handler functions

function startNewGame() {
  var p1 = new Player("p1", "🤖");
  var p2 = new Player("p2", '👾');
  game = new Game();
  game.player1 = p1;
  game.player2 = p2;
  game.currentPlayer = game.player1;
  updatePlayerWins();
  // console.log(game);
}

function takeTurn(e) {
  var clickedBox = e.target;
  if (clickedBox.innerText === "") {
    addPlayerToken(clickedBox);
    updateBoxData(clickedBox);
    evaluateGrid();
  }
}

// helper functions

function addPlayerToken(box) {
  box.innerText = game.currentPlayer.token;
}

function updateBoxData(box) {
  var id = parseInt(box.id);
  for (var i = 0; i < game.board.length; i++) {
    if (i === id) {
      game.board[i] === game.currentPlayer.id;
    }
  }
}

function evaluateGrid() {
  game.checkForWinner();
  game.updateCurrentPlayer();
  updateTextDisplay();
}

function updateTextDisplay() {
  if (game.isActive === true) {
    gameDisplay.innerText = `it's ${game.currentPlayer.token}'s turn`;
  } else if (game.isActive === false) {
    gameDisplay.innerText = `${game.currentPlayer} wins!`;
  } else {
    gameDisplay.innerText = `$it's a draw :/`;
  }
}

function updatePlayerWins() {
  game.player1.retrieveWinsFromStorage();
  game.player2.retrieveWinsFromStorage();
  p1WinsDisplay = `${game.player1.wins} wins`;
  p2WinsDisplay = `${game.player2.wins} wins`;
}