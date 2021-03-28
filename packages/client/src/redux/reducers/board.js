import { findOpposingDiscs, updatePieceCount } from "../../utils";

export const initialize = state => {
  const { length } = state;
  const row = Array.from({ length }).map(() => "x");
  state.spaces = Array.from({ length }).map(() => row);
  //set starting discs
  state.spaces[length / 2 - 1][length / 2 - 1] = 1;
  state.spaces[length / 2 - 1][length / 2] = 0;
  state.spaces[length / 2][length / 2 - 1] = 0;
  state.spaces[length / 2][length / 2] = 1;
  //
  state.gameEnded = false;
  return state;
};

export const flipDiscs = (state, action) => {
  const { coordinate, turn } = action.payload;
  const { x, y } = coordinate;
  // if the selection is not a blank space, exit
  if (state.spaces[y][x] !== "x") return;
  // find all opposing discs with a player disc at the end of the chain
  const opposingDiscs = findOpposingDiscs(state, coordinate);
  // if player cannot overtake any discs, exit
  if (!opposingDiscs) return;
  // set selected space to current player's disc
  state.spaces[y][x] = turn;
  state.pieceCount = updatePieceCount(state.pieceCount, turn);

  //flip discs
  opposingDiscs.forEach(disc => {
    state.spaces[disc.y][disc.x] = turn;
    state.pieceCount = updatePieceCount(state.pieceCount, turn);
  });
  return state;
};

export const endGame = state => {
  state.gameEnded = true;
  return state;
};
