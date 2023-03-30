const board = document.querySelector('#board');
const cells = document.querySelectorAll('.empty');

const playerRed = 'R'; // Red player
const playerYellow = 'Y'; // Yellow player
const currentPlayer = playerRed; // Current player

const gameOver = false; // Game over flag
// let board; // Board array

const rows = 6; // Rows
const cols = 7; // Columns

function setGame() {
  // board = [];
  // Create the board array
  for (let r = 0; r < rows; r++) {
    const row = [];
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
    }
    board.push(row);
  }
}

// When the cells are clicked
cells.addEventListener('click', () => {
  setGame();
});