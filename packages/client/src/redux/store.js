import { configureStore } from "@reduxjs/toolkit";
import { boardReducer, playersReducer, progressionReducer } from "./slices";

const reducer = {
  board: boardReducer,
  players: playersReducer,
  progression: progressionReducer,
};

export default configureStore({ reducer });
