import React from "react";
import { VStack, Center } from "@chakra-ui/react";
// import GameHeader from "./GameHeader";
import GameFooter from "./footer";
import Board from "./board";

const Game = () => {
  return (
    <Center>
      <VStack spacing={3}>
        {/* <GameHeader /> */}
        <Board />
        <GameFooter />
      </VStack>
    </Center>
  );
};

export default Game;
