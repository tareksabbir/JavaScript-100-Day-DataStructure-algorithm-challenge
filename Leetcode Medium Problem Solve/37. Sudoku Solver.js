/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    dfs(board, 0, 0)
    return board;
  };
  
  let isValid = (board, row, column, value) => {
    let n = board.length;
  
    if (board[row].includes(value)) return false;
  
    for (let i = 0; i < n; i++) {
      if (board[i][column] === value) return false;
    }
  
    let [top, left] = [Math.floor(row / 3) * 3, Math.floor(column / 3) * 3];
  
    for (let i = top; i < top + 3; i++) {
      for (let j = left; j < left + 3; j++) {
        if (board[i][j] === value) return false;
      }
    }
  
    return true;
  }
  
  let dfs = (board, row, column) => {
    if (row === 9) return true;
    if (column === 9) return dfs(board, row + 1, 0);
    if (board[row][column] !== '.') return dfs(board, row, column + 1);
  
    for (let i = 1; i < 10; i++) {
      if (isValid(board, row, column, i.toString())) {
        board[row][column] = i.toString();
        if (dfs(board, row, column + 1)) return true;
        board[row][column] = '.';
      }
    }
  
    return false;
  }