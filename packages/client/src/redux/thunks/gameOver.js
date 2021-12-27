import { progressionActions, playerActions } from "../slices";
import { findWinner } from "../../utils";

export const gameOver = () => (dispatch, getState) => {
  const winner = findWinner(getState());
  if (winner) {
    const updatedPlayer = { ...winner, gamesWon: winner.gamesWon + 1 };
    dispatch(playerActions.updatePlayer(updatedPlayer));
  }
  dispatch(progressionActions.endGame());
};

export default gameOver;
