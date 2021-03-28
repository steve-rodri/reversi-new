import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "../reducers/board";

const initialState = {
  spaces: [],
  length: 8,
  gameEnded: false,
  pieceCount: {
    black: 2,
    white: 2,
  },
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers,
});

const { actions, reducer } = boardSlice;

export const { initialize, flipDiscs, endGame } = actions;
export default reducer;
