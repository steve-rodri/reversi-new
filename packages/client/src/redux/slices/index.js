import { createSlice } from "@reduxjs/toolkit";
export * from "./board";

export const {
  reducer: playersReducer,
  actions: { addPlayer, removePlayer, updatePlayer },
} = createSlice({
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

export const {
  reducer: overReducer,
  actions: { gameStarted, gameEnded },
} = createSlice({
  name: "over",
  initialState: false,
  reducers: {
    gameEnded: () => false,
    gameStarted: () => true,
  },
});

export const {
  reducer: playedReducer,
  actions: { incrementPlayed },
} = createSlice({
  name: "played",
  initialState: 0,
  reducers: {
    incrementPlayed: state => state++,
  },
});

export const {
  reducer: turnReducer,
  actions: { switchTurn, reset },
} = createSlice({
  name: "turn",
  initialState: 0,
  reducers: {
    switchTurn: state => (state ? 0 : 1),
    reset: () => 0,
  },
});
