import { boardActions, progressionActions } from "../slices";

export const startNewGame = () => dispatch => {
  dispatch(boardActions.initialize());
  dispatch(boardActions.setStartingDiscs());
  dispatch(boardActions.updateDiscCount());
  dispatch(progressionActions.newGame());
};
