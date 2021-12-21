import { getPossibleMoves } from "./checkForMove";
import shuffle from "./shuffle";

export default function cpuChoice(state) {
  let possibleMoves = getPossibleMoves(state);
  possibleMoves = shuffle(possibleMovesArray);
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}
