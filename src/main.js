// global & selector variables

var game;

var center = document.getElementById("center");
var gameDisplay = document.getElementById("gameText");
var gameGrid = document.getElementById("gameGrid");
var p1WinsDisplay = document.getElementById("winCounter1");
var p2WinsDisplay = document.getElementById("winCounter2");

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
  var id = parseInt(box.id);
  for (var i = 0; i < game.board.length; i++) {
    if (i === id) {
      game.board[i] = game.currentPlayer.id;
    }
  }
}

// test win/draw scenarios

function evaluateGrid() {
  game.checkForWinner();
  game.updateCurrentPlayer();
  game.checkForDraw();
  updateTextDisplay();
}

function updateTextDisplay() {
  if (game.isActive) {
    gameDisplay.innerText = `it's ${game.currentPlayer.token}'s turn`;
  } else if (!game.isActive && !game.isDraw) {
    gameDisplay.innerText = `${game.currentPlayer.id} wins!`;
    saveWins();
    clearBoard();
  } else {
    gameDisplay.innerText = "it's a draw 💀";
    saveWins();
    clearBoard();
  }
}

// update localStorage and display

function updateWinDisplay() {
  retrieveWins();
  p1WinsDisplay.innerText = `${game.player1.wins} wins`;
  p2WinsDisplay.innerText = `${game.player2.wins} wins`;
}

function saveWins() {
  game.player1.saveWinsToStorage();
  game.player2.saveWinsToStorage();
}

function retrieveWins() {
  game.player1.retrieveWinsFromStorage();
  game.player2.retrieveWinsFromStorage();
}

function clearBoard() {
    setTimeout(function() {
      location.reload(); }, 1000);
  }