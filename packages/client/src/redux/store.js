import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/board";
// import playerReducer from "./slices/player";

const reducer = {
  board: boardReducer,
  // players: playerReducer,
};

export default configureStore({ reducer });
