import opposition from "../opponent";

export default function checkDiagonally(...params) {
  const upLeft = checkUpLeft(...params);
  const upRight = checkUpRight(...params);
  const downLeft = checkDownLeft(...params);
  const downRight = checkDownRight(...params);
  return [...upLeft, ...upRight, ...downLeft, ...downRight];
}

function checkUpRight(coordinate, activePlayer, spaces) {
  const opponentDiscs = [];
  const opponent = opposition(activePlayer);
  let { x, y } = coordinate;
  x++;
  y--;
  while (x < spaces.length && y >= 0) {
    const spaceValue = spaces[y][x];
    if (!spaceValue) return [];
    if (spaceValue === activePlayer) return opponentDiscs;
    if (spaceValue === opponent) opponentDiscs.push({ x, y });
    x++;
    y--;
  }
  return [];
}

function checkDownLeft(coordinate, activePlayer, spaces) {
  const opponentDiscs = [];
  const opponent = opposition(activePlayer);
  let { x, y } = coordinate;
  x--;
  y++;
  while (x >= 0 && y < spaces.length) {
    const spaceValue = spaces[y][x];
    if (!spaceValue) return [];
    if (spaceValue === activePlayer) return opponentDiscs;
    if (spaceValue === opponent) opponentDiscs.push({ x, y });
    x--;
    y++;
  }
  return [];
}

function checkUpLeft(coordinate, activePlayer, spaces) {
  const opponentDiscs = [];
  const opponent = opposition(activePlayer);
  let { x, y } = coordinate;
  x--;
  y--;
  while (x >= 0 && y >= 0) {
    const spaceValue = spaces[y][x];
    if (!spaceValue) return [];
    if (spaceValue === activePlayer) return opponentDiscs;
    if (spaceValue === opponent) opponentDiscs.push({ x, y });
    x--;
    y--;
  }
  return [];
}

function checkDownRight(coordinate, activePlayer, spaces) {
  const opponentDiscs = [];
  const opponent = opposition(activePlayer);
  let { x, y } = coordinate;
  x++;
  y++;
  while (x < spaces.length && y < spaces.length) {
    const spaceValue = spaces[y][x];
    if (!spaceValue) return [];
    if (spaceValue === activePlayer) return opponentDiscs;
    if (spaceValue === opponent) opponentDiscs.push({ x, y });
    x++;
    y++;
  }
  return [];
}
