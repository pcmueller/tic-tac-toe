# Planning Doc: *TIC TAC TOE* Project

### Functionality
---
* [GAME DEMO](https://youtu.be/p8UYR0Ixb5A)
* In this project, we will not be providing detailed iterations. We want you to exercise your skills in planning out work!

##### Notes:
* A timeout is used after a completed game to reset the board.
* YOU DO NOT NEED TO DISPLAY EACH INDIVIDUAL WIN BOARD. WE ONLY NEED TO SEE NUMBER OF WINS.
* No need to match colors or icons, but the overall layout should be the same. You can get as creative as you would like with your Tic Tac Toe design!

### Architecture
---
* Your entire application will consist of one HTML page. You will have three JavaScript files:

1. *A player.js file that contains a Player class.*
  * Player methods must include, but are not limited to:
    * constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: [])
    * saveWinsToStorage
    * retrieveWinsFromStorage

2. A game.js file that contains a Game class.
  * *A Game should include:*
    * Two Player instances
      * A way to keep track of the data for the game board
      * A way to keep track of which player’s turn it currently is
      * A way to check the Game’s board data for win conditions
      * A way to detect when a game is a draw (no one has won)
      * A way to save a winning Game’s board data to the correct player’s wins array
      * A way to reset the Game’s board to begin a new game

3. *A main.js file that contains all DOM related JavaScript*
