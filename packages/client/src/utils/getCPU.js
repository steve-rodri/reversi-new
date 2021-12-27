export const getCPU = ({ players }) =>
  players.find(player => player.name === "CPU");
