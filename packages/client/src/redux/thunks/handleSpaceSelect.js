import { findOpponentDiscs, firstLetter } from "../../utils";
import { boardActions, progressionActions } from "../slices";
import opponentMove from "./opponentMove";

export const handleSpaceSelect = params => (dispatch, getState) => {
  const { coordinate, isCPU } = params;
  const { board, progression, players } = getState();
  // if space is occupied, exit
  if (board.spaces[coordinate.y][coordinate.x]) return;

  // if it is not the players turn to play, exit
  if (progression.gameType === "one-player-local") {
    const player = isCPU ? players[1] : players[0];
    if (player.color !== progression.turn) return;
  }

  // if there are no opponentDiscs to flip, exit
  const turn = firstLetter(progression.turn);
  const opponentDiscs = findOpponentDiscs(coordinate, turn, board.spaces);
  if (!opponentDiscs) return;

  // set selected space to current player's disc
  dispatch(selectSpace({ coordinate, turn }));

  // flip all opponent discs
  opponentDiscs.forEach(oppCoord =>
    dispatch(selectSpace({ coordinate: oppCoord, turn }))
  );

  // switch turn
  dispatch(progressionActions.switchTurn());

  // check for CPU and dispatches CPU space selection
  // execute remaining game logic to see if the game can continue
  dispatch(opponentMove());
};

const selectSpace = params => dispatch => {
  dispatch(boardActions.updateSpace(params));
  dispatch(boardActions.updateDiscCount());
};

export default handleSpaceSelect;
