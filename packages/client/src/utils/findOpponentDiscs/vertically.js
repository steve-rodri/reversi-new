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
    const spaceValue = spaces[y][x];
    if (!spaceValue) return [];
    if (spaceValue === activePlayer) return opponentDiscs;
    if (spaceValue === opponent) opponentDiscs.push({ x, y });
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
    const spaceValue = spaces[y][x];
    if (!spaceValue) return [];
    if (spaceValue === activePlayer) return opponentDiscs;
    if (spaceValue === opponent) opponentDiscs.push({ x, y });
    y--;
  }
  return [];
}
