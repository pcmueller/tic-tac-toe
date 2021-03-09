class Game {
  constructor() {
    this.player1 = new Player("p1", "👾");
    this.player2 = new Player("p2", "🤖");
    this.currentPlayer = this.player1;
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.turnCounter = 0;
    this.isActive = true;
    this.isDraw = false;
  }

  checkForWinner() {
    if (this.board[0] && this.board[0] === this.board[1] && this.board[1] === this.board[2] || 
      this.board[3] && this.board[3] === this.board[4] && this.board[4] === this.board[5] || 
      this.board[6] && this.board[6] === this.board[7] && this.board[7] === this.board[8] || 
      this.board[0] && this.board[0] === this.board[3] && this.board[3] === this.board[6] || 
      this.board[1] && this.board[1] === this.board[4] && this.board[4] === this.board[7] || 
      this.board[2] && this.board[2] === this.board[5] && this.board[5] === this.board[8] || 
      this.board[0] && this.board[0] === this.board[4] && this.board[4] === this.board[8] || 
      this.board[2] && this.board[2] === this.board[4] && this.board[4] === this.board[6]) {
        this.declareWinner();
    } else {
      return;
    }
  }
  
  declareWinner() {
    this.isActive = false;
    this.currentPlayer.wins++;
    this.currentPlayer.saveWinsToStorage();
  }

  checkForDraw() {
    if (this.turnCounter === 8 && this.isActive) {
      this.isActive = false;
      this.isDraw = true;
    } else {
      return;
    }
  }

  updateCurrentPlayer() {
    this.updateCounter();
    if (this.turnCounter % 2 === 0) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
  }

  updateCounter() {
    if (this.isActive) {
      this.turnCounter++;
    }
  }

  clearBoard() {
    setTimeout(function() {
      location.reload(); }, 1000);
  }
}