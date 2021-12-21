export function findWinner(pieces, text) {
  const { black, white } = pieces;

  if (black > white) {
    if (text) return "Black Wins!";
    return 0;
  } else if (white > black) {
    if (text) return "White Wins!";
    return 1;
  } else if (black === white) {
    if (text) return "Tie!";
    return null;
  }
}

export default findWinner;
