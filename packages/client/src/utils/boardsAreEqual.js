export function boardsAreEqual(prevBoard, board) {
  let sumChanges = 0;
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      let previousBoard = prevBoard[y][x];
      let currentBoard = board[y][x];
      if (previousBoard !== currentBoard) {
        sumChanges += 1;
      }
    }
  }
  return !(sumChanges > 0);
}

export default boardsAreEqual;
