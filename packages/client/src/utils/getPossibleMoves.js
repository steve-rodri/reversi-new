import findOpponentDiscs from "./findOpponentDiscs";
import { firstLetter } from "./turnConversion";

// loop through board spaces
// if board space is not empty continue
// find all opponent discs with player disc at end
// if there are no opponentDiscs continue;
// otherwise add current coordinate as possible move;

export const getPossibleMoves = ({ board, progression }) => {
  const turn = firstLetter(progression.turn);
  const possibleMoves = [];
  for (let y = 0; y < board.spaces.length; y++) {
    for (let x = 0; x < board.spaces.length; x++) {
      if (board.spaces[y][x]) continue;
      const opponentDiscs = findOpponentDiscs({ x, y }, turn, board.spaces); // returns multi-dimensional array
      if (!opponentDiscs) continue;
      possibleMoves.push({ x, y });
    }
  }
  return possibleMoves;
};

export default getPossibleMoves;
