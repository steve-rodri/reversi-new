export const updatePieceCount = (count, turn) => {
  if (turn === 0) {
    count.black += 1;
    count.white -= 1;
  }
  if (turn === 1) {
    count.white += 1;
    count.black -= 1;
  }
  return count;
};

export default updatePieceCount;
