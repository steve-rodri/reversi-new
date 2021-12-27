import { getPossibleMoves, cpuChoice } from "../../utils";
import { progressionActions } from "../slices";
import { handleSpaceSelect } from "./handleSpaceSelect";
/*eslint no-debugger: "warn"*/

// check if the opponent can make a move
// if there is no move
// switch turn to see if the player can make a move
// recursively call opponentMove w/ boolean base case
// if both players cannot make a move the game is over

export const opponentMove = hasBeenChecked => (dispatch, getState) => {
  const state = getState();
  const moves = getPossibleMoves(state);
  if (moves.length === 0) {
    dispatch(progressionActions.switchTurn());
    if (hasBeenChecked) dispatch(progressionActions.endGame());
    else dispatch(opponentMove(true));
    return;
  }
  // if there is a cpu and it is the CPU's turn to move
  const { players, progression } = state;
  const cpu = players.find(player => player.name === "CPU");
  if (!cpu && progression.turn !== cpu.color) return;
  const coordinate = cpuChoice(moves);
  setTimeout(
    () => dispatch(handleSpaceSelect({ coordinate, player: cpu })),
    2000
  );
};

export default opponentMove;
