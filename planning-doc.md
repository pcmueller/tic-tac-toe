# Planning Doc: TIC TAC TOE Project
##### Project Specs: https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html

### Functionality
* [GAME DEMO](https://youtu.be/p8UYR0Ixb5A)
* In this project, we will not be providing detailed iterations. We want you to exercise your skills in planning out work!

##### Notes:
* A timeout is used after a completed game to reset the board.
* YOU DO NOT NEED TO DISPLAY EACH INDIVIDUAL WIN BOARD. WE ONLY NEED TO SEE NUMBER OF WINS.
* No need to match colors or icons, but the overall layout should be the same. You can get as creative as you would like with your Tic Tac Toe design!

### Architecture
*Your entire application will consist of one HTML page. You will have three JavaScript files:*

1. **A player.js file that contains a Player class.**
  * Player methods must include, but are not limited to:
    * constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: [])
    * saveWinsToStorage
    * retrieveWinsFromStorage

2. **A game.js file that contains a Game class.**
  * A Game should include:
    * Two Player instances
      * A way to keep track of the data for the game board
      * A way to keep track of which player’s turn it currently is
      * A way to check the Game’s board data for win conditions
      * A way to detect when a game is a draw (no one has won)
      * A way to save a winning Game’s board data to the correct player’s wins array
      * A way to reset the Game’s board to begin a new game

3. **A main.js file that contains all DOM related JavaScript**

### Data Model
*In a game like Tic Tac Toe, it is tempting to manipulate the DOM first. Remember that the game logic exists exclusively in the data model. The DOM simply reflects/displays that data model.*

#### Suggested Iterations
*This workflow is not required, but will help you meet the overall requirements of the project.*

1. Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
2. Create the Player class
3. Create the Game class
4. Make game fully playable without the DOM (manually updating the Game.board data, etc, from your console) to force yourself to think data-model-first
5. Create central game board on the DOM
6. Connect Game data model to the DOM
7. Display the Player data in the sidebars
8. Automatically reset the game board to allow for a new game to be played after the previous game is won
9. Persist Player data using local storage (number of wins should persist across page refreshes)

### Project Structure & Schedule

##### Iterations:

Iteration 1
- x
- x
- x

Iteration 2
- x
- x
- x

Iteration 3
- x
- x
- x

Iteration 4
- x
- x
- x

Review & Refactoring
- x
- x
- x
