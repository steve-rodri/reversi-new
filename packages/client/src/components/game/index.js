import React, { useEffect, useState, useRef } from "react";
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
  const [containerRef, dimensions] = useResizer();
  const { height, width } = dimensions;
  useEffect(() => {
    openPageLoadModal();
  }, []);
  useEffect(() => {
    if (gameOver && !gameOverModalProps.isOpen) openGameOverModal();
  }, [gameOver]);
  return (
    <>
      <Center ref={containerRef}>
        <VStack spacing={3}>
          <GameHeader />
          <Board size={height > width ? width : height} />
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

const useResizer = () => {
  const containerRef = useRef();
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const setSize = () => {
    const h = parseInt(
      window
        .getComputedStyle(containerRef.current)
        .getPropertyValue("height")
        .slice(0, -2)
    );
    setHeight(h);
    const w = parseInt(
      window
        .getComputedStyle(containerRef.current)
        .getPropertyValue("width")
        .slice(0, -2)
    );
    setWidth(w);
  };
  useEffect(() => {
    window.addEventListener("resize", setSize);
  }, []);
  return [containerRef, { height, width }];
};

export default Game;
