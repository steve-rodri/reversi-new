import { configureStore } from "@reduxjs/toolkit";
import { boardReducer, playerReducer, progressionReducer } from "./slices";

const reducer = {
  board: boardReducer,
  players: playerReducer,
  progression: progressionReducer,
};

export default configureStore({ reducer });
