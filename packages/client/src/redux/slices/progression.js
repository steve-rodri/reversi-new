import { createSlice } from "@reduxjs/toolkit";

export const progressionSlice = createSlice({
  name: "progression",
  initialState: {
    turn: 0,
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
      state.turn = state.turn ? 0 : 1;
      return state;
    },
    resetTurn: state => {
      state.turn = 0;
      return state;
    },
    endGame: state => {
      state.gameOver = true;
      return state;
    },
    newGame: state => {
      state.turn = 0;
      state.gameOver = false;
      return state;
    },
  },
});

export const progressionReducer = progressionSlice.reducer;
export const progressionActions = progressionSlice.actions;
export const {
  incrementGamesPlayed,
  resetGamesPlayed,
  switchTurn,
  resetTurn,
  endGame,
  newGame,
} = progressionActions;

export default progressionSlice;
