export const firstLetter = turn => {
  return turn[0];
};

export const fullWord = turn => {
  if (turn === "w") return "white";
  if (turn === "b") return "black";
};
