class Game {
  constructor() {
    this.board = [];
    this.players = [];
    this.currentPlayer;
    this.turnCounter = 0;
    this.isActive = true;
  }

  initiateNewGame() {
    this.players.push(new Player('one', '🤖'));
    this.players.push(new Player('two', '👾'));
  }

  checkForWinner() {
    // is this syntax correct, or do we need to use this.board[n].value?
    if (this.board[0] === this.board[1] && this.board[1] === this.board[2]) {
      this.declareVictory();
    } else if (this.board[3] === this.board[4] && this.board[4] === this.board[5]) {
      this.declareVictory();
    } else if (this.board[6] === this.board[7] && this.board[7] === this.board[8]) {
      this.declareVictory();
    } else if (this.board[0] === this.board[3] && this.board[3] === this.board[6]) {
      this.declareVictory();
    } else if (this.board[1] === this.board[4] && this.board[4] === this.board[7]) {
      this.declareVictory();
    } else if (this.board[2] === this.board[5] && this.board[5] === this.board[8]) {
      this.declareVictory();
    } else if (this.board[0] === this.board[4] && this.board[4] === this.board[8]) {
      this.declareVictory();
    } else if (this.board[2] === this.board[4] && this.board[4] === this.board[6]) {
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
    return;
  }

  declareVictory() {
    this.isActive = false;
    // playerName.wins++;
    // playerName.saveWinsToStorage()
  }

  clearBoard() {
    // invoke setTimeout() method to run helper function to clear DOM / refresh page
  }

  checkPlayerTurn() {
    if (this.turnCounter === 0 || this.turnCounter % 2 === 0) {
      this.currentPlayer = 'p1';
    } else {
      this.currentPlayer = 'p2';
    }
  }
}