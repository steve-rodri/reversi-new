export function findWinner(pieces, text) {
  const blackPieces = pieces.black;
  const whitePieces = pieces.white;

  if (blackPieces > whitePieces) {
    if (text) return "Black Wins!";
    return 0;
  } else if (whitePieces > blackPieces) {
    if (text) return "White Wins!";
    return 1;
  } else if (blackPieces === whitePieces) {
    if (text) return "Tie!";
    return null;
  }
}

export default findWinner;
