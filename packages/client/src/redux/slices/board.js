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
  const row = Array.from({ length }).map(() => "");
  state.spaces = Array.from({ length }).map(() => row);
  state.gameEnded = false;
  return state;
};

const setStartingDiscs = state => {
  const { length } = state;
  state.spaces[length / 2 - 1][length / 2 - 1] = "w";
  state.spaces[length / 2 - 1][length / 2] = "b";
  state.spaces[length / 2][length / 2 - 1] = "b";
  state.spaces[length / 2][length / 2] = "w";
  return state;
};

const updateSpace = (state, action) => {
  const { coordinate, turn } = action.payload;
  const { x, y } = coordinate;
  state.spaces[y][x] = turn;
  return state;
};

const updateDiscCount = state => {
  let black = 0;
  let white = 0;
  state.spaces.forEach(row => {
    row.forEach(space => {
      if (space === "b") black++;
      if (space === "w") white++;
    });
  });
  state.discs = { black, white };
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
