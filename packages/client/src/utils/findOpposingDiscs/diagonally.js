import opposition from "../opposition";

export default function checkDiagonally(...params) {
  const upLeft = checkUpLeft(...params);
  const upRight = checkUpRight(...params);
  const downLeft = checkDownLeft(...params);
  const downRight = checkDownRight(...params);
  return [...upLeft, ...upRight, ...downLeft, ...downRight];
}

function checkUpRight(state, coordinate) {
  const { board, turn } = state;
  const { x, y } = coordinate;
  let opposingDiscs = [];
  let x2 = x + 1;
  let y2 = y - 1;

  while (x2 < board.length && y2 >= 0) {
    switch (board[y2][x2]) {
      case "x":
        return null;

      case opposition(turn):
        opposingDiscs.push({
          x: x2,
          y: y2,
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
    x2 += 1;
    y2 -= 1;
  }
}

function checkDownLeft(state, coordinate) {
  const { board, turn } = state;
  const { x, y } = coordinate;
  let opposingDiscs = [];
  let x2 = x - 1;
  let y2 = y + 1;

  while (x2 >= 0 && y2 < board.length) {
    switch (board[y2][x2]) {
      case "x":
        return null;

      case opposition(turn):
        opposingDiscs.push({
          x: x2,
          y: y2,
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
    x2 -= 1;
    y2 += 1;
  }
}

function checkUpLeft(state, coordinate) {
  const { board, turn } = state;
  const { x, y } = coordinate;
  let opposingDiscs = [];
  let x2 = x - 1;
  let y2 = y - 1;

  while (x2 >= 0 && y2 >= 0) {
    switch (board[y2][x2]) {
      case "x":
        return null;

      case opposition(turn):
        opposingDiscs.push({
          x: x2,
          y: y2,
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
    x2 -= 1;
    y2 -= 1;
  }
}

function checkDownRight(state, coordinate) {
  const { board, turn } = state;
  const { x, y } = coordinate;
  let opposingDiscs = [];
  let x2 = x + 1;
  let y2 = y + 1;

  while (x2 < board.length && y2 < board.length) {
    switch (board[y2][x2]) {
      case "x":
        return null;

      case opposition(turn):
        opposingDiscs.push({
          x: x2,
          y: y2,
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
    x2 += 1;
    y2 += 1;
  }
}
