import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: [],
  length: 8,
  discs: {
    black: 2,
    white: 2,
  },
};

const initialize = state => {
  const { length } = state;
  const row = Array.from({ length }).map(() => "x");
  state.spaces = Array.from({ length }).map(() => row);
  state.gameEnded = false;
  return state;
};

const setStartingDiscs = state => {
  const { length } = state;
  state.spaces[length / 2 - 1][length / 2 - 1] = 1;
  state.spaces[length / 2 - 1][length / 2] = 0;
  state.spaces[length / 2][length / 2 - 1] = 0;
  state.spaces[length / 2][length / 2] = 1;
  return state;
};

const updateSpace = (state, action) => {
  const { coordinate, turn } = action.payload;
  const { x, y } = coordinate;
  state.spaces[y][x] = turn;
  return state;
};

const updateDiscCount = (state, action) => {
  const { coordinate, turn } = action.payload;
  const { x, y } = coordinate;
  const previousValue = state.spaces[y][x];

  if (previousValue === "x") {
    if (turn === 0) state.discs.black += 1;
    if (turn === 1) state.discs.white += 1;
  } else {
    if (turn === 0) {
      state.discs.black += 1;
      state.discs.white -= 1;
    }
    if (turn === 1) {
      state.discs.white += 1;
      state.discs.black -= 1;
    }
  }
  return state;
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    initialize,
    setStartingDiscs,
    updateSpace,
    updateDiscCount,
  },
});

export const boardReducer = boardSlice.reducer;
export const boardActions = boardSlice.actions;
export default boardSlice;
