// global & selector variables

var game;

var center = document.getElementById("center");
var gameDisplay = document.getElementById("gameText");
var gameGrid = document.getElementById("gameGrid");
var p1WinsDisplay = document.getElementById("p1WinsDisplay");
var p2WinsDisplay = document.getElementById("p2WinsDisplay");

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
  updateWinDisplay();
}

function takeTurn(e) {
  var clickedBox = e.target;
  if (clickedBox.innerText === "" && game.isActive) {
    addPlayerToken(clickedBox);
    updateBoardData(clickedBox);
    evaluateGrid();
  }
}

// update date model & DOM

function addPlayerToken(box) {
  box.innerText = game.currentPlayer.token;
}

function updateBoardData(box) {
  var parsedId = parseInt(box.id);
  for (var i = 0; i < game.board.length; i++) {
    if (i === parsedId) {
      game.board[i] = game.currentPlayer.id;
    }
  }
}

// test win/draw scenarios

function evaluateGrid() {
  game.checkForWinner();
  game.checkForDraw();
  game.updateCurrentPlayer();
  updateTextDisplay();
}

function updateTextDisplay() {
  if (game.isActive) {
    gameDisplay.innerText = `it's ${game.currentPlayer.token}'s turn`;
  } else if (!game.isActive && !game.isDraw) {
    gameDisplay.innerText = `${game.currentPlayer.token} wins!`;
    clearBoard();
  } else {
    gameDisplay.innerText = "it's a draw 💀";
    clearBoard();
  }
}

// update localStorage and DOM display

function updateWinDisplay() {
  retrieveWins();
  p1WinsDisplay.innerText = `${game.player1.wins} wins`;
  p2WinsDisplay.innerText = `${game.player2.wins} wins`;
}

function retrieveWins() {
  game.player1.retrieveWinsFromStorage();
  game.player2.retrieveWinsFromStorage();
}

function clearBoard() {
    setTimeout(function() {
      location.reload(); }, 1000);
  }