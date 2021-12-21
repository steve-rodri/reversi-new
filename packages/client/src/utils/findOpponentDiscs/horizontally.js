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
    const space = spaces[y][x];
    if (space === "x") return [];
    if (space === activePlayer) return opponentDiscs;
    if (space === opponent) opponentDiscs.push({ x, y });
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
    const space = spaces[y][x];
    if (space === "x") return [];
    if (space === activePlayer) return opponentDiscs;
    if (space === opponent) opponentDiscs.push({ x, y });
    x++;
  }
  return [];
}
