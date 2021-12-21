export const updateDiscCount = (count, turn, previousValue) => {
  if (previousValue === "x") {
    if (turn === 0) {
      count.black += 1;
    }
    if (turn === 1) {
      count.white += 1;
    }
  } else {
    if (turn === 0) {
      count.black += 1;
      count.white -= 1;
    }
    if (turn === 1) {
      count.white += 1;
      count.black -= 1;
    }
  }

  return count;
};

export default updateDiscCount;
