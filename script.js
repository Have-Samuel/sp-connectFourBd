const board = document.querySelector('#board');
// const cells = document.querySelectorAll('.empty');

const playerRed = 'R'; // Red player
const playerYellow = 'Y'; // Yellow player
const currentPlayer = playerRed; // Current player

const gameOver = false; // Game over flag
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
  const r = parseInt(coords[0]);
  const c = parseInt(coords[1]);

  // add the piece to the board
  board[r][c] = currentPlayer;
  const cell = this;
  if (currentPlayer === playerRed) {
    // cell.classList.remove('cell-empty');
    cell.classList.add('cell-red');
  } else {
    // cell.classList.remove('cell-empty');
    cell.classList.add('cell-yellow');
  }
}

// Set the game
function setGame() {
  // board = [];

  // Create the board array
  for (let r = 0; r < rows; r++) {
    const row = [''];
    for (let c = 0; c < cols; c++) {
      // Add the cells to the board
      row.push(null);

      // Add the cells to the DOM
      // <div id="0-0"class="cell-empty"></div>
      const cell = document.createElement('div');
      cell.classList.add('cell-empty');
      // Add an id to the cell for easy access
      // cell.id = `${r.toString()}-${c.toString()}`;
      cell.id = `${r}-${c}`;
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
