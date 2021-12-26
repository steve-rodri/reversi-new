import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "players",
  initialState: [],
  reducers: {
    addPlayer: (state, { payload }) => state.concat(payload),
    removePlayer: (state, { payload }) =>
      state.filter(player => player.num === payload.num),
    updatePlayer: (state, { payload }) =>
      state.map(player =>
        player.num === payload.num ? { ...player, ...payload } : player
      ),
    clear: () => [],
  },
});

export const playerReducer = playerSlice.reducer;
export const playerActions = playerSlice.actions;
export default playerSlice;
