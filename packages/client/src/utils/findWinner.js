export function findWinner(state) {
  const { players, board } = state;
  const { black, white } = board.discs;
  return players.find(player => {
    if (black > white) return player.color === "black";
    if (black < white) return player.color === "white";
    if (black === white) return undefined;
  });
}

export default findWinner;
