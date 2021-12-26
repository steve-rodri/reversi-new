import shuffle from "./shuffle";

export const cpuChoice = possibleMoves => {
  const shuffledMoves = shuffle(possibleMoves);
  const randomIndex = Math.floor(Math.random() * shuffledMoves.length);
  return shuffledMoves[randomIndex];
};

export default cpuChoice;
