class Game {
  constructor() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.player1;
    this.player2;
    this.currentPlayer;
    this.turnCounter = 0;
    this.isActive = true;
    this.isDraw = false;
  }

  updateCurrentPlayer() {
    game.turnCounter++;
    if (this.turnCounter % 2 === 0) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
  }

  checkForWinner() {
    if (this.board[0] !== "" && this.board[0] === this.board[1] && this.board[1] === this.board[2]) {
    this.declareWinner();
    } else if (this.board[3] !== "" && this.board[3] === this.board[4] && this.board[4] === this.board[5]) {
      this.declareWinner();
    } else if (this.board[6] !== "" && this.board[6] === this.board[7] && this.board[7] === this.board[8]) {
      this.declareWinner();
    } else if (this.board[0] !== "" && this.board[0] === this.board[3] && this.board[3] === this.board[6]) {
      this.declareWinner();
    } else if (this.board[1] !== "" && this.board[1] === this.board[4] && this.board[4] === this.board[7]) {
      this.declareWinner();
    } else if (this.board[2] !== "" && this.board[2] === this.board[5] && this.board[5] === this.board[8]) {
      this.declareWinner();
    } else if (this.board[0] !== "" && this.board[0] === this.board[4] && this.board[4] === this.board[8]) {
      this.declareWinner();
    } else if (this.board[2] !== "" && this.board[2] === this.board[4] && this.board[4] === this.board[6]) {
      this.declareWinner();
    } else {
      return;
    }
  }
  
  declareWinner() {
    this.turnCounter--;
    this.currentPlayer.wins++;
    this.currentPlayer.saveWinsToStorage();
    this.isActive = false;
  }

  checkForDraw() {
    if (this.turnCounter === 9 && this.isActive === true) {
      this.isActive = false;
      this.isDraw = true;
    } else {
      return;
    }
  }
}