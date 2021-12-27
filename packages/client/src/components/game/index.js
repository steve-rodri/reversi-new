import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import { GameOver, PageLoadRouter } from "../modals";
import { VStack, Center } from "@chakra-ui/react";
import GameHeader from "./header";
import GameFooter from "./footer";
import Board from "./board";
import Modal from "../Modal";

const Game = () => {
  const { gameOver } = useSelector(state => state.progression);
  const { onOpen: openGameOverModal, ...gameOverModalProps } = useDisclosure();
  const { onOpen: openPageLoadModal, ...pageLoadModalProps } = useDisclosure();
  useEffect(() => {
    openPageLoadModal();
  }, []);
  useEffect(() => {
    if (gameOver && !gameOverModalProps.isOpen) openGameOverModal();
  }, [gameOver]);
  return (
    <>
      <Center>
        <VStack spacing={3}>
          <GameHeader />
          <Board />
          <GameFooter />
        </VStack>
      </Center>
      <Modal
        {...pageLoadModalProps}
        isCentered
        hideCloseButton
        closeOnOverlayClick={false}
      >
        <PageLoadRouter closeModal={pageLoadModalProps.onClose} />
      </Modal>
      <Modal {...gameOverModalProps} isCentered>
        <GameOver closeModal={gameOverModalProps.onClose} />
      </Modal>
    </>
  );
};

export default Game;
