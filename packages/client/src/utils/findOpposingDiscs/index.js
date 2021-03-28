import checkVertically from "./vertically";
import checkHorizontally from "./horizontally";
import checkDiagonally from "./diagonally";

export function findOpposingDiscs(state, coordinate) {
  const vertical = checkVertically(state, coordinate);
  const horizontal = checkHorizontally(state, coordinate);
  const diagonal = checkDiagonally(state, coordinate);

  const opposingDiscs = [...vertical, ...horizontal, ...diagonal];
  if (opposingDiscs.length) return opposingDiscs;
}

export default findOpposingDiscs;
