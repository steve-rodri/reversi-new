import { configureStore } from "@reduxjs/toolkit";
import {
  boardReducer,
  playedReducer,
  playersReducer,
  overReducer,
  turnReducer,
} from "./slices";

const reducer = {
  board: boardReducer,
  players: playersReducer,
  played: playedReducer,
  over: overReducer,
  turn: turnReducer,
};

export default configureStore({ reducer });
