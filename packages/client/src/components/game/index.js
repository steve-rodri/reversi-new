import React from "react";
import { VStack, Center } from "@chakra-ui/react";
// import GameHeader from "./GameHeader";
import Footer from "./Footer";
import Board from "./board";

const Game = () => {
  return (
    <Center>
      <VStack spacing={3}>
        {/* <GameHeader /> */}
        <Board />
        <Footer />
      </VStack>
    </Center>
  );
};

export default Game;
