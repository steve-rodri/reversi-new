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
  const state = useSelector(state => state);
  const winner = findWinner(state);
  const onNewGame = () => {
    closeModal();
    setTimeout(() => dispatch(startNewGame()), 200);
  };
  return (
    <VStack spacing={8}>
      <Center>
        <Heading>{`${winner.name} Wins!`}</Heading>
      </Center>
      <Grid autoFlow="column" gap={4}>
        <VStack>
          <Heading as="h3" fontSize="xl">
            Black
          </Heading>
          <Text fontSize="lg">{state.board.discs.black}</Text>
        </VStack>
        <Divider />
        <VStack>
          <Heading as="h3" fontSize="xl">
            White
          </Heading>
          <Text fontSize="lg">{state.board.discs.white}</Text>
        </VStack>
      </Grid>

      <Button onClick={onNewGame}>New Game</Button>
    </VStack>
  );
};

GameOver.propTypes = {
  closeModal: PropTypes.func,
};
