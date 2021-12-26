import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  VStack,
  Grid,
  Center,
  Heading,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { startNewGame } from "../../redux";
import { findWinner } from "../../utils";

export const GameOver = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { discs } = useSelector(state => state.board);
  const winner = findWinner(discs, true);
  const onNewGame = () => {
    closeModal();
    setTimeout(() => dispatch(startNewGame()), 200);
  };
  return (
    <VStack spacing={8}>
      <Center>
        <Heading>{winner}</Heading>
      </Center>
      <Grid autoFlow="column" gap={4}>
        <VStack>
          <Heading as="h3" fontSize="xl">
            Black
          </Heading>
          <Text fontSize="lg">{discs.black}</Text>
        </VStack>
        <Divider />
        <VStack>
          <Heading as="h3" fontSize="xl">
            White
          </Heading>
          <Text fontSize="lg">{discs.white}</Text>
        </VStack>
      </Grid>

      <Button onClick={onNewGame}>New Game</Button>
    </VStack>
  );
};

GameOver.propTypes = {
  closeModal: PropTypes.func,
};
