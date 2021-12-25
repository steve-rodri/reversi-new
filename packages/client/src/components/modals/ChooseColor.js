import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Disc from "../game/board/Disc";
import { Grid, Center, VStack, Heading, Divider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../redux";
import { turnValue } from "../../utils";

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
        <Piece onSelect={onSelect} color="black" />
        <Piece onSelect={onSelect} color="white" />
      </Grid>
    </VStack>
  );
};

const Piece = ({ color, onSelect }) => {
  const [disabled, setDisabled] = useState(false);
  const players = useSelector(state => state.players);
  const value = turnValue(color);
  const onClick = () => {
    if (disabled) return;
    onSelect(color);
  };
  useEffect(() => {
    players.forEach(player => {
      if (disabled) return;
      if (player.color === color) setDisabled(true);
    });
  }, [players, color]);
  return (
    <Center
      bgColor="board.default"
      opacity={disabled ? 0.4 : 1}
      borderRadius={2}
      boxSize={50}
      onClick={onClick}
    >
      <Disc value={value} />
    </Center>
  );
};

ChooseColor.propTypes = {
  gameType: PropTypes.string,
  setModalView: PropTypes.func,
  closeModal: PropTypes.func,
};

Piece.propTypes = {
  color: PropTypes.string,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
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

export default ChooseColor;
