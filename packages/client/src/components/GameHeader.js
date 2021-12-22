import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import Turn from "./Turn";
import ScoreBoard from "./ScoreBoard";

const GameHeader = () => {
  return (
    <Flex>
      <Turn />
      <Spacer />
      <ScoreBoard />
    </Flex>
  );
};

export default GameHeader;
