// Store the game board as an array of nulls
let board = [null, null, null, null, null, null, null, null, null];

// Store the current player
let currentPlayer = "X";

// Get all the cells on the game board
let cells = document.querySelectorAll(".cell");

// Add an event listener to each cell
cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    // Get the index of the clicked cell
    let index = Array.from(cells).indexOf(cell);

    // Check if the cell is empty
    if (board[index] === null) {
      // Update the game board and the UI
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;

      // Check if the current player has won
      if (checkWin(currentPlayer)) {
        alert(currentPlayer + " wins!");
        reset();
      } else if (checkDraw()) {
        alert("Draw!");
        reset();
      } else {
        // Switch to the other player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

// Check if the given player has won
function checkWin(player) {
  // Check the rows
  for (let i = 0; i < 9; i += 3) {
    if (board[i] === player && board[i+1] === player && board[i+2] === player) {
      return true;
    }
  }

  // Check the columns
  for (let i = 0; i < 3; i++) {
    if (board[i] === player && board[i+3] === player && board[i+6] === player) {
      return true;
    }
  }

  // Check the diagonals
  if (board[0] === player && board[4] === player && board[8] === player) {
    return true;
  }
  if (board[2] === player && board[4] === player && board[6] === player) {
    return true;
  }

  // If no win was found, return false
  return false;
}

// Check
