import opposition from "../opponent";

export default function checkHorizontal(...params) {
  const left = checkLeft(...params);
  const right = checkRight(...params);
  return [...left, ...right];
}

function checkLeft(coordinate, activePlayer, spaces) {
  const opponentDiscs = [];
  const opponent = opposition(activePlayer);
  let { x, y } = coordinate;
  x--;
  while (x >= 0) {
    const spaceValue = spaces[y][x];
    if (!spaceValue) return [];
    if (spaceValue === activePlayer) return opponentDiscs;
    if (spaceValue === opponent) opponentDiscs.push({ x, y });
    x--;
  }
  return [];
}

function checkRight(coordinate, activePlayer, spaces) {
  const opponentDiscs = [];
  const opponent = opposition(activePlayer);
  let { x, y } = coordinate;
  x++;
  while (x < spaces.length) {
    const spaceValue = spaces[y][x];
    if (!spaceValue) return [];
    if (spaceValue === activePlayer) return opponentDiscs;
    if (spaceValue === opponent) opponentDiscs.push({ x, y });
    x++;
  }
  return [];
}
