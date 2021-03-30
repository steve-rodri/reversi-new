import { updateDiscCount } from "../utils";

export const initialize = state => {
  const { length } = state;
  const row = Array.from({ length }).map(() => "x");
  state.spaces = Array.from({ length }).map(() => row);
  state.gameEnded = false;
  return state;
};

export const setStartingDiscs = state => {
  const { length } = state;
  state.spaces[length / 2 - 1][length / 2 - 1] = 1;
  state.spaces[length / 2 - 1][length / 2] = 0;
  state.spaces[length / 2][length / 2 - 1] = 0;
  state.spaces[length / 2][length / 2] = 1;
  return state;
};

export const endGame = state => {
  state.gameEnded = true;
  return state;
};

export const updateSpace = (state, action) => {
  const { coordinate, turn } = action.payload;
  const { x, y } = coordinate;
  state.discs = updateDiscCount(state.discs, turn, state.spaces[y][x]);
  state.spaces[y][x] = turn;
  return state;
};
