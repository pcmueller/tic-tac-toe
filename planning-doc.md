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

#### Iterations:

###### Iteration 1
1. Plan/build initial HTML layout
 - List elements, draw structure longhand, then transpose into pseudo doc.
2. Create player.js file w/ Player class constructor (incl. id, token, wins, and guesses properties, w/ default values), and empty saveWinsToStorage & retrieveWinsFromStorage methods.
3. Create game.js file w/ Game class constructor 
 - include the following properties:
   - player1 and player 2, to receive individual Player class instantiations
   - an empty gameBoard variable (to receive array of boxes 1-9, once assigned object values via succesful 'click' event)
   - a currentPlayer variable (defaulted to 'p1' or player1?)
   - a turnCounter variable (inst. at 0)
   - a Boolean isActive variable (defaulted to true?)
 - ... and the following class methods:
   - checkForWinner(), to access values of all 9 squares (as stored inside gameBoard.boxes) and test all 8 possible winning combinations (via conditionals), and    if any is satisfied, invoke the declareVictory() method. Otherwise, run checkForDraw() method
   - declareVictory() to reassign value of isActive (false), push gameBoard array (objects 0-8) into wins array, display "win" message, invoke clearBoard() function
   - checkForDraw(), to test if turnCounter variable has value of 9 AND isActive has value of true, if so display "draw" message, invoke clearBoard() function
   - clearBoard(), to reset turnCounter, currentPlayer, & gameBoard, and execute 'timeout' by invoking setTimeout() method (should message display happen here?) to clear/refresh center DOM when timer ends.
4. Create styles.css file
 - build out classes for all HTML elements
 - format all elements to match basic layout
 - add minimal styling to make HTML more readable

*future functionality ideas:*
- gameGrid.addEventListener('click', takeTurn);
- takeTurn()
  - identify event target's parent (which square), then check if it currently has a value.
  - if no, then add value (p1 or p2), which should either be automatically reflected in gameBoard or changed from here.
  - addition of value to square should then triggger DOM refresh (invoke helper function to replace HTML block with interpolated emoji and value

###### Iteration 2
- x
- x

###### Iteration 3
- x
- x

###### Iteration 4
- x
- x

###### Review & Refactoring
- x
- x

#### Schedule:

###### Day 1 - Wednesday 3.3
- Create GitHub Repo
- Create GitHub [Project Board](https://github.com/users/pcmueller/projects/1)
- Send Day 1 Deliverables to PM ([Heather](https://github.com/hfaerber))

###### Day 2 - Thursday 3.4
- Break down project into subtasks and assign to iterations
- Schedule iterations/subtasks on GitHub Project Board
- Meet with mentor to review functionality ideas and iteration schedule, broadly
- Pseudocode Iterations 1-2
- Begin Iteration 1

###### Day 3 - Friday 3.5
- Complete Iteration 1 code
- Begin Iteration 2
- Pseudocode Iteration 3

###### Day 4 - Saturday 3.6
- Complete Iteration 2 code
- Begin Iteration 3
- Pseudocode Iteration 4

###### Day 5 - Sunday 3.7
- Complete Iteration 3 code
- Begin Iteration 4
- Plan refactoring

###### Day 6 - Monday 3.8
- Complete Iteration 4 code
- Begin and complete all re-styling
- Begin refactoring
- Reach out for code reviews, if permitted

###### Day 7 - Tues 3.9
- Clean/refactor HTML using Style Guide
- Clean/refactor CSS using Style Guide
- Clean/refactor JS using Style Guide
- Complete final code cleanup
- **PROJECT DUE AT 9pm**

