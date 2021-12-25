import { createSlice } from "@reduxjs/toolkit";

export const progressionSlice = createSlice({
  name: "progression",
  initialState: {
    turn: "black",
    gamesPlayed: 0,
    gameOver: false,
  },
  reducers: {
    incrementGamesPlayed: state => {
      state.gamesPlayed = state.gamesPlayed++;
      return state;
    },
    resetGamesPlayed: state => {
      state.gamesPlayed = 0;
      return state;
    },
    switchTurn: state => {
      state.turn = state.turn === "black" ? "white" : "black";
      return state;
    },
    resetTurn: state => {
      state.turn = "black";
      return state;
    },
    endGame: state => {
      state.gameOver = true;
      return state;
    },
    newGame: state => {
      state.turn = "black";
      state.gameOver = false;
      return state;
    },
  },
});

export const progressionReducer = progressionSlice.reducer;
export const progressionActions = progressionSlice.actions;

export default progressionSlice;
