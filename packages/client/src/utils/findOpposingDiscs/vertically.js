import opposition from "../opposition";

export default function checkVertical(...params) {
  const up = checkUp(...params);
  const down = checkDown(...params);
  return [...up, ...down];
}

function checkDown(state, coordinate) {
  const { board, turn } = state;
  const { x, y } = coordinate;
  let opposingDiscs = [];
  let i = y + 1;

  while (i < board.length) {
    switch (board[i][x]) {
      case "x":
        return null;

      case opposition(turn):
        opposingDiscs.push({
          x: x,
          y: i,
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

function checkUp(state, coordinate) {
  const { board, turn } = state;
  const { x, y } = coordinate;
  let opposingDiscs = [];
  let i = y - 1;

  while (i >= 0) {
    switch (board[i][x]) {
      case "x":
        return null;

      case opposition(turn):
        opposingDiscs.push({
          x: x,
          y: i,
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
