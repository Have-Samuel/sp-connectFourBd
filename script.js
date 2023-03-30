const board = document.querySelector('#board');
// const cells = document.querySelectorAll('.empty');

const playerRed = 'R'; // Red player
const playerYellow = 'Y'; // Yellow player
const currentPlayer = playerRed; // Current player

const gameOver = false; // Game over flag
let currColumns; // Current columns
// let board; // Board array

const rows = 6; // Rows
const cols = 7; // Columns

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
    cell.classList.add('cell-red');
    currentPlayer = playerYellow;
  } else {
    cell.classList.add('cell-yellow');
    currentPlayer = playerRed;
  }
  // Updating the row height for the column
  // subtract r to move up by one row
  r -= 1;
  // Update the Array to the new row
  currColumns[c] = r;
}

// Set the game
function setGame() {
  // board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5]; // Current columns

  // Create the board array
  for (let r = 0; r < rows; r++) {
    const row = [''];
    for (let c = 0; c < cols; c++) {
      // Add the cells to the board
      row.push(null);

      // Add the cells to the DOM
      const cell = document.createElement('div');
      cell.classList.add('cell-empty');
      // Add an id to the cell for easy access
      cell.id = `${r.toString()}-${c.toString()}`;
      board.append(cell);

      // When the cells are clicked
      cell.addEventListener('click', setPiece);
    }
  }
}

window.onload = () => {
  setGame();
};

// function setGame() {
//   // board = [];
//   // Create the board array
//   for (let r = 0; r < rows; r++) {
//     const row = [];
//     for (let c = 0; c < cols; c++) {
//       // Add the cells to the board
//       row.push(null);

//       // Add the cells to the DOM
//       // <div id="0-0"class="cell-empty"></div>
//       const cell = document.createElement('div');
//       cell.classList.add('cell-empty');
//       // Add an id to the cell for easy access
//       // cell.id = `${r.toString()}-${c.toString()}`;
//       cell.id = `${r}-${c}`;
//       board.append(cell);
//     }
//     board.push(row);
//   }
// }

// // When the cells are clicked
// cells.forEach((cell) => {
//   cell.addEventListener('click', () => {
//     // console.log(cell.id);
//     setGame();
//   });
// });
