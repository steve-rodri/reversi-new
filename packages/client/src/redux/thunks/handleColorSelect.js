import { playerActions } from "../slices";
import opponentMove from "./opponentMove";

/*eslint no-debugger: "warn"*/

export const handleColorSelect = params => (dispatch, getState) => {
  const state = getState();
  const { gameType } = state.progression;
  if (gameType === "one-player-local") dispatch(handleOnePlayerLocal(params));
  if (gameType === "two-player-local") dispatch(handleTwoPlayerLocal(params));
};

//

const handleOnePlayerLocal = params => (dispatch, getState) => {
  const { color, closeModal } = params;
  const [player, cpu] = getState().players;
  dispatch(playerActions.updatePlayer({ ...player, color }));
  const cpuColor = color === "black" ? "white" : "black";
  dispatch(playerActions.updatePlayer({ ...cpu, color: cpuColor }));
  closeModal();
  if (cpuColor === "black") dispatch(opponentMove());
};

const handleTwoPlayerLocal = params => (dispatch, getState) => {
  const { color, closeModal, setModalView } = params;
  const [one, two] = getState().players;
  if (one && !two) {
    dispatch(playerActions.updatePlayer({ ...one, color }));
    setModalView("enter-player-2");
  }
  if (two) {
    dispatch(playerActions.updatePlayer({ ...two, color }));
    closeModal();
  }
};
