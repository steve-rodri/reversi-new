import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import Modal from "./Modal";
import GameRules from "./GameRules";
import GameDescription from "./GameDescription";

export const RulesModalButton = () => {
  const { onOpen, ...modalProps } = useDisclosure();
  return (
    <>
      <Button variant="link" onClick={onOpen}>
        Rules
      </Button>
      <Modal header="Rules" {...modalProps}>
        <GameRules />
      </Modal>
    </>
  );
};

export const DescriptionModalButton = () => {
  const { onOpen, ...modalProps } = useDisclosure();
  return (
    <>
      <Button variant="link" onClick={onOpen}>
        Description
      </Button>
      <Modal header="Rules" {...modalProps}>
        <GameDescription />
      </Modal>
    </>
  );
};
