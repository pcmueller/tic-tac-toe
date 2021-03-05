class Player {
  constructor(playerNum, token) {
    this.id = playerNum;
    this.token = token;
    this.wins = 0;
    this.guesses = 0;
  }

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem(this.id, stringifiedWins);
  }
    retrieveWinsFromStorage() {
    var parsedWins = JSON.parse(localStorage.getItem(this.id));
    this.wins += parsedWins;
    // make sure this ^ accesses *value* of item, rather than *id*
  }
}