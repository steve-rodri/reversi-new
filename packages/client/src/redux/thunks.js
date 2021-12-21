import { findOpponentDiscs, checkForMove, cpuChoice } from "../utils";
import { boardActions, progressionActions } from "./slices";

export const selectSpace = (coordinate, turn) => (dispatch, state) => {
  const { x, y } = coordinate;
  // if the selection is not a blank space, exit
  if (state.board.spaces[y][x] !== "x") return;
  // find all opponent discs that the player can flip
  const opponentDiscs = findOpponentDiscs(coordinate, turn, state.board.spaces);
  // if player cannot overtake any discs, exit
  if (!opponentDiscs) return;
  // set selected space to current player's disc
  dispatch(boardActions.updateSpace(coordinate, turn));
  // update board disc count
  dispatch(boardActions.updateDiscCount(coordinate, turn));

  // flip all opponent discs
  opponentDiscs.forEach(oppCoord => {
    dispatch(boardActions.updateSpace(oppCoord, turn));
    dispatch(boardActions.updateDiscCount(oppCoord, turn));
  });

  // switch turn
  dispatch(progressionActions.switchTurn());
  dispatch(opponentMove());
};

const opponentMove = cycleBackToActivePlayer => (dispatch, state) => {
  // check if the opponent can make a move
  const move = checkForMove(state);
  // if there is no move
  if (!move) {
    // switch turn to see if the player can make a move
    dispatch(progressionActions.switchTurn());
    if (!cycleBackToActivePlayer) dispatch(opponentMove(true));
    // if both players cannot make a move the game is over
    if (cycleBackToActivePlayer) dispatch(progressionActions.endGame());
  }
  // if there is a cpu and it is the CPU's turn to move
  const cpu = state.players.find(player => player.name === "CPU");
  if (cpu && state.turn === cpu.color) {
    // CPU makes choice and dispatches a space selection action
    const coordinate = cpuChoice(state.spaces);
    setTimeout(() => dispatch(selectSpace(coordinate, state.turn)), 4000);
  }
};
