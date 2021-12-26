import React from "react";
import { HStack } from "@chakra-ui/react";
import ModalButton from "./ModalButton";
import { GameRules, GameDescription } from "../../modals";

const GameFooter = () => {
  return (
    <HStack alignSelf="start" spacing={4}>
      <ModalButton modalHeader="Rules" modalContent={<GameRules />}>
        Rules
      </ModalButton>
      <ModalButton modalHeader="Description" modalContent={<GameDescription />}>
        Description
      </ModalButton>
    </HStack>
  );
};

export default GameFooter;
