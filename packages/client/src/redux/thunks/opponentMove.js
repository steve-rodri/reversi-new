import { getPossibleMoves, cpuChoice } from "../../utils";
import { progressionActions } from "../slices";
import { handleSpaceSelect } from "./handleSpaceSelect";
import { gameOver } from "./gameOver";

// check if the opponent can make a move
// if there is no move
// switch turn to see if the player can make a move
// recursively call opponentMove w/ boolean base case
// if both players cannot make a move the game is over

export const opponentMove = hasBeenChecked => (dispatch, getState) => {
  const moves = getPossibleMoves(getState());
  if (moves.length === 0) {
    dispatch(progressionActions.switchTurn());
    if (hasBeenChecked) dispatch(gameOver());
    else dispatch(opponentMove(true));
    return;
  }
  // if there is a cpu and it is the CPU's turn to move
  const { players, progression } = getState();
  const cpu = players.find(player => player.name === "CPU");
  if (!cpu && progression.turn !== cpu.color) return;
  const coordinate = cpuChoice(moves);
  setTimeout(
    () => dispatch(handleSpaceSelect({ coordinate, isCPU: true })),
    2000
  );
};

export default opponentMove;
