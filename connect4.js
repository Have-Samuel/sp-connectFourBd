/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game {
  constructor(p1, p2, WIDTH = 7, HEIGHT = 6) {
    this.players = [p1, p2],
    this.currPlayer = p1,
    this.WIDTH = WIDTH,
    this.HEIGHT = HEIGHT,
    this.makeBoard(),
    this.makeHtmlBoard(),
    this.gameOver = false;
  }

  /** makeBoard: create in-JS board structure:
  *   board = array of rows, each row is array of cells  (board[y][x])
  */
  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.HEIGHT; y + 1) {
      this.board.push(Array.from({ length: this.WIDTH }));
    }
  }

  /** makeHtmlBoard: make HTML table and row of column tops. */
  makeHtmlBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
  }
  // make column tops (clickable area for adding a piece to that column)
  const top = document.createElement('tr');
  top.setAttribute('id', 'column-top');
  // store a reference to the handleClick bound function
  // so that we can remove the event listener correctly later
  this.handleGameClick = this.handleClick.bind(this);
  
  top.addEventListener('click', this.handleGameClick);

  for (let x = 0; x < this.WIDTH; x + 1) {
    const headCell = document.createElement('td');
    headCell.setAttribute('id', x);
    top.append(headCell);
  }
  
  board.append(top);

  // make main part of board
  for (let y = 0; y <= this.HEIGHT; y + 1) {
    const row = document.createElement('tr');

    for (let x = 0; x < this.WIDTH; x + 1) {
      const cell = document.createElement('td');
      cell.setAttribute('id', `${y}-${x}`);
      row.append(cell);
    }

    board.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
findSpotForCol(x) {
  for (let y = this.HEIGHT - 1; y >= 0; y - 1) {
    if (!this.board[y][x]) {
      return y;
    }
  }
  return null;  
}

/** placeInTable: update DOM to place piece into HTML table of board */
placeInTable(y, x) {
  const piece = document.createElement('div');
  piece.classList.add('piece');
  piece.style.backgroundColor = this.currPlayer.color;
  piece.style.top = -50 * (y + 2); // 50px between rows and 10px for the top row

  const spot = document.getElementById(`${y}-${x}`);
  spot.append(piece);
}

/** endGame: announce game end */
endGame(msg) {
  alert(msg);
  const top = document.querySelector("#column-top");
  top.removeEventListener('click', this.handleGameClick);
}

/** handleClick: handle click of column top to play piece */
handleClick(e) {
  // get x from ID of clicked cell
  const x = +e.taget.id;

  // get next spot in column (if none, ignore click)
  const y = this.findSpotForCol(x);
  if (y === null) {
    return;
  }

  // Place the piece on the board and add to HTML thable
  this.board[x][y] = this.currPlayer;
  this.placeInTable(y, x);

  // check for tie
  if (this.Board.every((row) => row.every((cell) => cell))) {
    return this.endGame('Tie');
  }
  // Check for win
  if (this.checkForWin()) {
    thisgameOver = true;
    return this.endGame(`The ${this.currPlayer.color} Player Won!`);
  }

  // Switch Players
  this.currPlayer = 
  this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

checkForWin() {
  // Check four cells to see if they're all color of current player
  //  - cells: list of four (y, x) cells
  //  - returns true if all are legal coordinates & all match currPlayer
  const win = cells => 
  cells.every(([y, x]) => y >= 0 
  && y < this.HEIGHT && x >= 0 
  && x < this.WIDTH
  && this.board[y][x] === this.currPlayer);

  for (let y = 0; y < this.HEIGHT; y + 1) {
    for (let x = 0; x < this.WIDTH; x + 1) {
      // get "check list" of 4 cells (starting here) for each of the different
      // ways to win
      const hor = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const ver = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const dia = [[y, x], [y + 1, x +1], [y + 2, x + 2], [y + 3, x + 3]];
      const antDia = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x -3]];

      
    }
  }
}