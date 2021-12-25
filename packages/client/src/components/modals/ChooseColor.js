import React from "react";
import PropTypes from "prop-types";
import Disc from "../game/board/Disc";
import { Grid, Center, VStack, Heading, Divider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../redux";

export const ChooseColor = ({ gameType, setModalView, closeModal }) => {
  const dispatch = useDispatch();
  const currentPlayer = getCurrentPlayer(gameType);
  const onSelect = color => {
    if (!currentPlayer) return;
    dispatch(playerActions.updatePlayer({ ...currentPlayer, color }));
    if (gameType === "one-player-local") {
      if (color === "black") color = "white";
      if (color === "white") color = "black";
      dispatch(playerActions.updatePlayer({ num: 2, color }));
      closeModal();
    }
    if (gameType === "two-player-local") {
      if (currentPlayer.num === 1) setModalView("enter-player-2");
      if (currentPlayer.num === 2) closeModal();
    }
  };
  return (
    <VStack spacing={8}>
      <Heading as="h3" fontSize="2xl">
        Choose Color:
      </Heading>
      <Divider />
      <Grid autoFlow="column" justifyContent="space-evenly" w="75%" py={10}>
        <BlackPiece onSelect={onSelect} />
        <WhitePiece onSelect={onSelect} />
      </Grid>
    </VStack>
  );
};

const getCurrentPlayer = gameType => {
  const players = useSelector(state => state.players);
  if (!players.length) return;
  if (players.length === 1) return players[0];
  if (gameType === "one-player-local")
    return players.find(player => player.name === "Player");
  if (gameType === "two-player-local") {
    return players.find(player => player.color === undefined);
  }
};

const BlackPiece = ({ onSelect }) => {
  return (
    <Center
      bgColor="board.default"
      borderRadius={2}
      boxSize={50}
      onClick={() => onSelect("black")}
    >
      <Disc value="b" />
    </Center>
  );
};

const WhitePiece = ({ onSelect }) => {
  return (
    <Center
      bgColor="board.default"
      borderRadius={2}
      boxSize={50}
      onClick={() => onSelect("white")}
    >
      <Disc value="w" />
    </Center>
  );
};

BlackPiece.propTypes = {
  onSelect: PropTypes.func,
};

WhitePiece.propTypes = {
  onSelect: PropTypes.func,
};

ChooseColor.propTypes = {
  gameType: PropTypes.string,
  setModalView: PropTypes.func,
  closeModal: PropTypes.func,
};

export default ChooseColor;
