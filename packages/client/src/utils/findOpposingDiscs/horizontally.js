import opposition from "../opposition";

export default function checkHorizontal(...params) {
  const left = checkLeft(...params);
  const right = checkRight(...params);
  return [...left, ...right];
}

function checkLeft(state, coordinate) {
  const { board, turn } = state;
  const { x, y } = coordinate;
  let opposingDiscs = [];
  let i = x - 1;

  while (i >= 0) {
    switch (board[y][i]) {
      case "x":
        return null;

      case opposition(turn):
        opposingDiscs.push({
          x: i,
          y: y,
        });
        break;

      case turn:
        if (opposingDiscs.length !== 0) {
          return opposingDiscs;
        }
        return null;
      default:
        return;
    }
    i -= 1;
  }
}

function checkRight(state, coordinate) {
  const { board, turn } = state;
  const { x, y } = coordinate;
  let opposingDiscs = [];
  let i = x + 1;

  while (i < board.length) {
    switch (board[y][i]) {
      case "x":
        return null;

      case opposition(turn):
        opposingDiscs.push({
          x: i,
          y: y,
        });
        break;

      case turn:
        if (opposingDiscs.length !== 0) {
          return opposingDiscs;
        }
        return null;
      default:
        return;
    }
    i += 1;
  }
}
