import React from "react";
import { Flex } from "@chakra-ui/react";
import TurnIndicator from "./TurnIndicator";

export const GameHeader = () => {
  return (
    <Flex w="full" alignItems="flex-start">
      <TurnIndicator />
    </Flex>
  );
};

export default GameHeader;
