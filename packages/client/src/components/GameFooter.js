import React from "react";
import { HStack } from "@chakra-ui/react";
import { RulesModalButton, DescriptionModalButton } from "./buttons";

const GameFooter = () => {
  return (
    <HStack alignSelf="start" spacing={4}>
      <RulesModalButton />
      <DescriptionModalButton />
    </HStack>
  );
};

export default GameFooter;
