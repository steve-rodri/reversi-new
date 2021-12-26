import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Disc from "../game/board/Disc";
import { Grid, Center, VStack, Heading, Divider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { handleColorSelect } from "../../redux";

export const ChooseColor = props => {
  return (
    <VStack spacing={8}>
      <Heading as="h3" fontSize="2xl">
        Choose Color:
      </Heading>
      <Divider />
      <Grid autoFlow="column" justifyContent="space-evenly" w="75%" py={10}>
        <Piece {...props} value="black" />
        <Piece {...props} value="white" />
      </Grid>
    </VStack>
  );
};

const Piece = ({ value, ...rest }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const players = useSelector(state => state.players);
  const onSelect = e => {
    e.stopPropagation();
    if (disabled) return;
    dispatch(handleColorSelect({ ...rest, color: value }));
  };
  useEffect(() => {
    players.forEach(player => {
      if (disabled) return;
      if (player.color === value) setDisabled(true);
    });
  }, [players, value]);
  return (
    <Center
      bgColor="board.default"
      opacity={disabled ? 0.4 : 1}
      borderRadius={2}
      boxSize={50}
      onClick={onSelect}
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
  value: PropTypes.string,
};

export default ChooseColor;
