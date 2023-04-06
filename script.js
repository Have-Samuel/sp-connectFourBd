// const board = document.querySelector('#board');
// const cells = document.querySelectorAll('.empty');

const playerRed = 'R'; // Red player
const playerYellow = 'Y'; // Yellow player
const currentPlayer = playerRed; // Current player

const gameOver = false; // Game over flag
const board; // Board array

let currColumns; // Current columns
// let board; // Board array

const rows = 6; // Rows
const cols = 7; // Columns

// Set the winner
function setWinner(r, c) {
  // Set the game over flag
  let winner = document.getElementById('winner');
  if (board[r][c] === playerRed) {
    winner.innerText = 'Red player wins!';
  } else {
    winner.innerText = 'Yellow player wins!';
  }
  gameOver = true;
}

// Check for a winner
function checkWinner() {
// Checking horizontally
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols - 3; c++) { // we use cols - 3 because we need to check 4 cells
      if (board[r][c] !== ' ') {
        if (board[r][c] === board[r][c + 1]
          && board[r][c + 1] === board[r][c + 2]
          && board[r][c + 2] === board[r][c + 3]) {
          setWinner(r, c);
          return;
        }
      }
    }
  }
}

// Checking vertically
for (let c = 0; c < cols; c++) {
  for (let r = 0; r < rows - 3; r++) {
    if (board[r][c] !== ' ') {
      if (board[r][c] === board[r + 1][c]
        && board[r + 1][c] === board[r + 2][c]
        && board[r + 2][c] === board[r + 3][c]) {
        console.log(board[r][c]);
        setWinner(r, c);
        // return;
      }
    }
  }
}

// Anti Diagonally
for (let r = 0; r < rows - 3; r++) {
  for (let c = 0; c < cols - 3; c++) {
    if (board[r][c] !== ' ') {
      if (
        board[r][c] === board[r + 1][c + 1]
        && board[r + 1][c + 1] === board[r + 2][c + 2]
         && board[r + 2][c + 2] === board[r + 3][c + 3]) {
        setWinner(r, c);
        // return;
      }
    }
  }
}

// Diagonally
for (let r = 3; r < rows; r++) {
  for (let c = 0; c < cols - 3; c++) {
    if (board[c][r] !== '') {
      if (board[r][c] === board[r - 1][c + 1]
        && board[r - 1][c + 1] === board[r - 2][c + 2]
        && board[r - 2][c + 2] === board[r - 3][c + 3]) {
        setWinner(r, c);
        // return;
      }
    }
  }
}

// Set the piece
function setPiece() {
  if (gameOver) {
    return; // If the game is over, do nothing
  }
  // if game is not over, set the piece
  // console.log(this.id);
  const coords = this.id.split('-'); // split - '0-0' => ['0', '0']
  // since they are strings, convert them to numbers
  // with the parseInt() function
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  // Check if the column is full
  r = currColumns[c];
  if (r < 0) {
    return; // If the column is full, do nothing
  }
  // add the piece to the board
  board[r][c] = currentPlayer;
  const cell = document.getElementById(`${r.toString()}-${c.toString()}`);
  if (currentPlayer === playerRed) {
    cell.classList.add('red-cell ');
    currentPlayer = playerYellow;
  } else {
    cell.classList.add('yellow-cell');
    currentPlayer = playerRed;
  }
  // Updating the row height for the column
  // subtract r to move up by one row
  r -= 1;
  currColumns[c] = r;// Update the Array to the new row

  checkWinner();
}

// Set the game
function setGame() {
  // board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5]; // Current columns

  // Create the board array
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      // Add the cells to the board
      row.push(' ');

      // Add the cells to the DOM
      const cell = document.createElement('div');
      cell.classList.add('cell-empty');
      cell.addEventListener('click', setPiece);
      // Add an id to the cell for easy access
      cell.id = `${r.toString()}-${c.toString()}`;
      document.getElementById('board').append(cell);
      // When the cells are clicked
    }
    board.push(rows);
  }
}

window.onload = () => {
  setGame();
};
