/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/

export function printBoard(board) {
  let row1 = [];
  let row2 = [];
  let row3 = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let element = board[i][j];
      if (i === 0) {
        if (element === "X" || element === "O") {
          row1.push(element);
          if (j != 2) {
            row1.push("|");
          }
        } else if (element === "_") {
          row1.push(" ");
          if (j != 2) {
            row1.push("|");
          }
        }
      } else if (i === 1) {
        if (element === "X" || element === "O") {
          row2.push(element);
          if (j != 2) {
            row2.push("|");
          }
        } else if (element === "_") {
          row2.push(" ");
          if (j != 2) {
            row2.push("|");
          }
        }
      } else if (i === 2) {
        if (element === "X" || element === "O") {
          row3.push(element);
          if (j != 2) {
            row3.push("|");
          }
        } else if (element === "_") {
          row3.push(" ");
          if (j != 2) {
            row3.push("|");
          }
        }
      }
    }
  }

  console.log(row1.join(" "));
  console.log("=================");
  console.log(row2.join(" "));
  console.log("=================");
  console.log(row3.join(" "));
  console.log("=================");
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {}
