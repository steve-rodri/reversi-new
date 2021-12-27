import { getCPU, getCurrentPlayer } from "../../utils";
import { playerActions } from "../slices";
import opponentMove from "./opponentMove";

/*eslint no-debugger: "warn"*/

export const handleColorSelect = params => (dispatch, getState) => {
  const state = getState();
  const { gameType } = state.progression;
  if (gameType === "one-player-local") dispatch(handleOnePlayerLocal(params));
  if (gameType === "two-player-local") dispatch(handleTwoPlayerLocal(params));
};

const handleOnePlayerLocal = params => (dispatch, getState) => {
  const { color, closeModal } = params;
  const { progression, players } = getState();
  const currentPlayer = getCurrentPlayer(progression.gameType, players);
  dispatch(playerActions.updatePlayer({ ...currentPlayer, color }));
  const cpu = getCPU(players);
  const cpuColor = color === "black" ? "white" : "black";
  dispatch(playerActions.updatePlayer({ ...cpu, color: cpuColor }));
  closeModal();
  if (cpuColor === "black") dispatch(opponentMove());
};

const handleTwoPlayerLocal = params => (dispatch, getState) => {
  const { color, closeModal, setModalView } = params;
  const { progression, players } = getState();
  const currentPlayer = getCurrentPlayer(progression.gameType, players);
  dispatch(playerActions.updatePlayer({ ...currentPlayer, color }));
  if (currentPlayer.num === 1) setModalView("enter-player-2");
  if (currentPlayer.num === 2) closeModal();
};
