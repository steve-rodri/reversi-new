import { findOpponentDiscs } from "../../utils";
import { boardActions, progressionActions } from "../slices";
import opponentMove from "./opponentMove";

export const handleSpaceSelect = (coordinate, turn) => (dispatch, getState) => {
  const { board } = getState();
  if (board.spaces[coordinate.y][coordinate.x]) return;
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
