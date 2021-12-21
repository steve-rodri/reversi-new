import findOpponentDiscs from "./findOpponentDiscs";

export const getPossibleMoves = ({ board, progression }) => {
  const { spaces } = board;
  const { turn } = progression;
  const possibleMoves = [];
  // loop through board spaces
  for (let y = 0; y < spaces.length; y++) {
    for (let x = 0; x < spaces.length; x++) {
      // if board space is not empty continue
      if (spaces[y][x] !== "x") continue;
      // find all opponent discs with player disc at end
      const opponentDiscs = findOpponentDiscs({ x, y }, turn, spaces); // returns multi-dimensional array
      // if there are no opponentDiscs continue;
      if (opponentDiscs.length === 0) continue;
      // otherwise add current coordinate as possible move;
      possibleMoves.push({
        x: x,
        y: y,
      });
    }
  }
  return possibleMoves;
};

export const checkForMove = state => getPossibleMoves(state).length !== 0;
export default checkForMove;
