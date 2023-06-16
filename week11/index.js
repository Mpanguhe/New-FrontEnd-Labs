 // Game variables
 let currentPlayer = "X";
 let moves = 0;
 let gameEnded = false;
 let grid = [
   ["", "", ""],
   ["", "", ""],
   ["", "", ""]
 ];

 // Function to handle cell click
 function makeMove(row, col) {
   if (gameEnded || grid[row][col] !== "") return;

   grid[row][col] = currentPlayer;
   document.getElementById("grid").rows[row].cells[col].innerText = currentPlayer;
   moves++;

   if (checkWin(currentPlayer)) {
     endGame(currentPlayer + " wins!");
   } else if (moves === 9) {
     endGame("It's a draw!");
   } else {
     currentPlayer = currentPlayer === "X" ? "O" : "X";
     document.getElementById("turn").innerText = "It's " + currentPlayer + "'s turn";
   }
 }

 // Function to check for a win
 function checkWin(player) {
   // Check rows
   for (let i = 0; i < 3; i++) {
     if (
       grid[i][0] === player &&
       grid[i][1] === player &&
       grid[i][2] === player
     ) {
       return true;
     }
   }

   // Check columns
   for (let j = 0; j < 3; j++) {
     if (
       grid[0][j] === player &&
       grid[1][j] === player &&
       grid[2][j] === player
     ) {
       return true;
     }
   }

   // Check diagonals
   if (
     (grid[0][0] === player &&
       grid[1][1] === player &&
       grid[2][2] === player) ||
     (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player)
   ) {
     return true;
   }

   return false;
 }

 // Function to end the game
 function endGame(message) {
   gameEnded = true;
   document.getElementById("result").innerText = message;
 }

 // Function to restart the game
 function restartGame() {
   currentPlayer = "X";
   moves = 0;
   gameEnded = false;
   grid = [
     ["", "", ""],
     ["", "", ""],
     ["", "", ""]
   ];

   // Clear the grid
   let cells = document.getElementsByTagName("td");
   for (let i = 0; i < cells.length; i++) {
     cells[i].innerText = "";
   }

   // Reset the turn message
   document.getElementById("turn").innerText = "It's X's turn";

   // Clear the result message
   document.getElementById("result").innerText = "";
 }