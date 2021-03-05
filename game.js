class Game {
  constructor() {
    this.player1 = new Player('one', '❤️');
    this.player2 = new Player('two', '⭐️');
    this.board = [];
    this.currentPlayer = 1;
    this.turnCounter = 0;
    this.isActive = true;
  }

  checkForWinner() {
    // probably can't run a triple conditional, but this is the logic:
    if (this.board[0] === this.board[1] === this.board[2]) {
      this.declareVictory();
    } else if (this.board[3] === this.board[4] === this.board[5]) {
      this.declareVictory();
    } else if (this.board[6] === this.board[7] === this.board[8]) {
      this.declareVictory();
    } else if (this.board[0] === this.board[3] === this.board[6]) {
      this.declareVictory();
    } else if (this.board[1] === this.board[4] === this.board[7]) {
      this.declareVictory();
    } else if (this.board[2] === this.board[5] === this.board[8]) {
      this.declareVictory();
    } else if (this.board[0] === this.board[4] === this.board[8]) {
      this.declareVictory();
    } else if (this.board[2] === this.board[4] === this.board[6]) {
      this.declareVictory();
    } else {
      this.checkForDraw();
    }
  }

  checkForDraw() {
    if (this.turnCounter === 9 && this.isActive === true) {
      // display "draw" message
      this.clearBoard();
    }
  }

  declareVictory() {
    this.isActive = false;
    // playerName.wins++;
    // playerName.saveWinsToStorage()
  }

  clearBoard() {
    // invoke setTimeout() method to run helper function to clear DOM / refresh page
  }
}