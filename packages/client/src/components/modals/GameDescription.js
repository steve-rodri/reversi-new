import React from "react";
import { VStack, Text, Heading } from "@chakra-ui/react";

export const GameDescription = () => {
  return (
    <VStack spacing={4}>
      <Text>
        <strong>Reversi</strong> (<span>or Othello</span>) is a strategy board
        game for two players, played on an 8×8 uncheckered board. There are
        sixty-four identical game pieces called discs, which are light on one
        side and dark on the other. Players take turns placing disks on the
        board with their assigned color facing up.
      </Text>
      <VStack>
        <Heading as="h3" mt={4} fontSize="lg" alignSelf="start">
          Objective
        </Heading>
        <Text>
          The player with the most pieces of their kind on the board after all
          valid moves have been completed wins the game. In order to achieve
          this, players can take over other pieces by{" "}
          <span>&#34;outflanking&#34;</span>
          them.
        </Text>
      </VStack>
    </VStack>
  );
};

export default GameDescription;
