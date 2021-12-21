import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "players",
  initialState: [],
  reducers: {
    addPlayer: (state, { payload }) => state.concat(payload),
    removePlayer: (state, { payload }) =>
      state.filter(player => player.number === payload.number),
    updatePlayer: (state, { payload }) =>
      state.map(player =>
        player.number === payload.number ? payload : player
      ),
  },
});

export const playerReducer = playerSlice.reducer;
export const playerActions = playerSlice.actions;
export const { addPlayer, removePlayer, updatePlayer } = playerActions;
export default playerSlice;
