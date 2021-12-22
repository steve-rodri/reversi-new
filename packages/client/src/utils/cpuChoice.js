import { getPossibleMoves } from "./checkForMove";
import shuffle from "./shuffle";

export const cpuChoice = state => {
  const possibleMoves = shuffle(getPossibleMoves(state));
  const randomIndex = Math.floor(Math.random() * possibleMoves.length);
  return possibleMoves[randomIndex];
};

export default cpuChoice;
