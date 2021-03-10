# Tic Tac Toe!

#### Project Links
- [GitHub Page](https://pcmueller.github.io/tic-tac-toe/)
- [GitHub Repo](https://github.com/pcmueller/tic-tac-toe)

### Specification
Now that you’ve got the main foundations down to build out a frontend application, it’s time to prove to yourself that you own those skills! You’re going to be building a Tic Tac Toe game from scratch!

The project spec and rubric can be found [here](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html)

![Alt Text](https://media.giphy.com/media/rTDV3lBy5swoRreh4b/giphy.gif)

### Learning Goals
Solidify and demonstrate your understanding of:
- DRY JavaScript
- localStorage to persist data
- event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

### Solo Project Expectations
This project is an important step in demonstrating you are ready to start Module 2. To ensure we can accurately assess that, it’s important you meet the expectations:

- You are the only one who should type code - no copy-pasting code!
- For any code that you didn’t write entirely by yourself (mentor or rock supported), you should be able delete it and re-write it yourself
- No youtube videos or tutorials of programming Tic Tac Toe. If you have an opportunity and are tempted, do the right thing for YOUR learning and don’t do it!
- Any peer-to-peer collaboration should be discussions about IDEAS, not coding together or sharing code.
- We want to see YOUR work.

## Functionality

#### Click Unoccupied Grid Boxes
- Using this interactive, 2-player web application, a user can play endless rounds of Tic Tac Toe!  By clicking individual boxes within a responsive grid, a player can to place their assigned "token" - either "space monster" or "robot" - in that space. Once occupied by a token, that space becomes inaccessible in future turns.  As a fun way to emphasize which spaces are availabe, the cursor icon and background color change when the user hovers over unoccupied boxes!

#### Automatically Alternate Player Turns
- Every time a space is successfully clicked, the turn alternates to the next player, making their token immediately available for play.  

#### Reflect Data Model Changes in the DOM and Data Model
- These changes are immediately reflected on the user's screen, and subsequently stored in a Data Model for reference throughout the active game.  

#### Check For Win/Draw Scenarios
- Immediately after the user clicks an available box, the program will check to see if a "win" or "draw" scenario has been achieved, and if so, the game will automatically restart.

#### Persist "Win Count" in Local Storage
- While a new game will start anytime the players finish a game or refresh the page, a log of player wins will persist regardless!  

#### Web Accessibility
- Our application has fully implemented HTML that is accessible for individuals with visual disabilities. Our application passes the WAVE audit tool.

#### Technologies Used
- JavaScript
- HTML
- CSS

#### Styling Guides Used
- Turing Style Guides
- Single-Responsibility Principle
- SMACCS

#### Credits
##### Co-Contributors
- [🦥 Peter Muellerleile](https://github.com/pcmueller)

##### Project Manager
- [👩🏻‍🏫 Heather Faerber](https://github.com/hfaerber)

### Want to contribute?
- Interested in contributing to Tic Tac Toe?
- Fork this project and clone to your machine.
- Create a pull request, and our project manager will get back to you with a code review!

**************************************************************************

###### This project was created for [Turing School of Software and Design](https://turing.io/)
###### 09MARCH2021
