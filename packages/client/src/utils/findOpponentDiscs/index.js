import checkVertically from "./vertically";
import checkHorizontally from "./horizontally";
import checkDiagonally from "./diagonally";

export function findOpponentDiscs(...params) {
  const vertical = checkVertically(...params);
  const horizontal = checkHorizontally(...params);
  const diagonal = checkDiagonally(...params);

  const opponentDiscs = [...vertical, ...horizontal, ...diagonal];
  if (opponentDiscs.length) return opponentDiscs;
}

export default findOpponentDiscs;
