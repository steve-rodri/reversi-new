import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "../boardReducers";

const initialState = {
  spaces: [],
  length: 8,
  pieceCount: {
    black: 2,
    white: 2,
  },
};

export const {
  reducer: boardReducer,
  actions: { initialize, setStartingDiscs, handleSpaceSelect },
} = createSlice({
  name: "board",
  initialState,
  reducers,
});

export default boardReducer;
