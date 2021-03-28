import { possibleMoves } from "./canMove";
import shuffle from "./shuffle";

export function cpuChoice(state) {
  let possibleMovesArray = possibleMoves(state);
  possibleMovesArray = shuffle(possibleMovesArray);
  return possibleMovesArray[
    Math.floor(Math.random() * possibleMovesArray.length)
  ];
}

export default cpuChoice;
