import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import TurnIndicator from "./TurnIndicator";
// import ScoreBoard from "./ScoreBoard";

export const GameHeader = () => {
  return (
    <Flex w="full" alignItems="flex-start">
      <TurnIndicator />
      <Spacer />
    </Flex>
  );
};

export default GameHeader;
