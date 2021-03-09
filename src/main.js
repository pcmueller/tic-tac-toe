// GLOBAL & SELECTOR VARIABLES

var gameGrid = document.getElementById("gameGrid");
var gameDisplay = document.getElementById("gameText");
var p1WinsDisplay = document.getElementById("p1Wins");
var p2WinsDisplay = document.getElementById("p2Wins");

var game;

// EVENT LISTENERS

window.addEventListener("DOMContentLoaded", startNewGame);

gameGrid.addEventListener("click", function(event) {
  takeTurn(event);
});

// HANDLER FUNCTIONS

function startNewGame() {
  game = new Game();
  updateWinDisplay();
}

function takeTurn(e) {
  var clickedBox = e.target;
  if (clickedBox.classList.contains("box") && clickedBox.innerText === "" && game.isActive) {
    addPlayerToken(clickedBox);
    updateBoardData(clickedBox);
    game.checkForWinner();
    game.checkForDraw();
    game.updateCurrentPlayer();
    updateTextDisplay();
  }
}

// DOM HELPER FUNCTIONS

function addPlayerToken(box) {
  box.innerText = game.currentPlayer.token;
  box.classList.add("occupied");
}

function updateTextDisplay() {
  if (game.isActive && game.currentPlayer === game.player1) {
    gameDisplay.innerText = `it's ${game.currentPlayer.token} time`;
  } else if (game.isActive && game.currentPlayer === game.player2) {
    gameDisplay.innerText = `get 'em, ${game.currentPlayer.token}`;
  } else if (!game.isActive && !game.isDraw) {
    gameDisplay.innerText = `${game.currentPlayer.token} wins!`;
    game.clearBoard();
  } else {
    gameDisplay.innerText = `it's a draw 💀`;
    game.clearBoard();
  }
}

function updateWinDisplay() {
  retrieveWins();
  p1WinsDisplay.innerText = `${game.player1.wins} wins`;
  p2WinsDisplay.innerText = `${game.player2.wins} wins`;
}

// DATA MODEL HELPER FUNCTIONS

function updateBoardData(box) {
  var parsedId = parseInt(box.id);
  for (var i = 0; i < game.board.length; i++) {
    if (i === parsedId) {
      game.board[i] = game.currentPlayer.id;
    }
  }
}

// LOCALSTORAGE HELPER FUNCTIONS

function retrieveWins() {
  game.player1.retrieveWinsFromStorage();
  game.player2.retrieveWinsFromStorage();
}