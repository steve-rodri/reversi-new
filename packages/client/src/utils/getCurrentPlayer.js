export const getCurrentPlayer = (gameType, players) => {
  if (!players.length) return;
  if (players.length === 1) return players[0];
  if (gameType === "one-player-local")
    return players.find(player => player.name === "Player");
  if (gameType === "two-player-local") {
    return players.find(player => player.color === undefined);
  }
};

export default getCurrentPlayer;
