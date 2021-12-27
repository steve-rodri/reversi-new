export const getCurrentPlayer = ({ players, progression }) => {
  if (!players.length) return;
  if (players.length === 1) return players[0];
  if (progression.gameType === "one-player-local")
    return players.find(player => player.name === "Player");
  if (progression.gameType === "two-player-local") {
    return players.find(player => player.color === undefined);
  }
};

export default getCurrentPlayer;
