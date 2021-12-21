import opposition from "../opponent";

export default function checkVertical(...params) {
  const up = checkUp(...params);
  const down = checkDown(...params);
  return [...up, ...down];
}

function checkDown(coordinate, activePlayer, spaces) {
  const opponentDiscs = [];
  const opponent = opposition(activePlayer);
  let { x, y } = coordinate;
  y++;
  while (y < spaces.length) {
    const space = spaces[y][x];
    if (space === "x") return [];
    if (space === activePlayer) return opponentDiscs;
    if (space === opponent) opponentDiscs.push({ x, y });
    y++;
  }
  return [];
}

function checkUp(coordinate, activePlayer, spaces) {
  const opponentDiscs = [];
  const opponent = opposition(activePlayer);
  let { x, y } = coordinate;
  y--;
  while (y >= 0) {
    const space = spaces[y][x];
    if (space === "x") return [];
    if (space === activePlayer) return opponentDiscs;
    if (space === opponent) opponentDiscs.push({ x, y });
    y--;
  }
  return [];
}
