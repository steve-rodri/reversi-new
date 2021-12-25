import React, { useState, useEffect } from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";
import { ChooseGameType } from "./modals";
import Modal from "./Modal";
import Header from "./Header";
import Game from "./game";

const App = () => {
  const { onOpen, ...modalProps } = useDisclosure();
  const [gameType, setGameType] = useState();
  const [modalView, setModalView] = useState();
  const ModalContent = props => {
    if (modalView === "choose-game-type")
      return <ChooseGameType setGameType={setGameType} />;
    if (modalView === "choose-color")
      return <ChooseColor gameType={gameType} />;
    if (modalView === "enter-player-1") return <EnterPlayerInfo />;
    if (modalView === "enter-player-2") return <EnterPlayerInfo />;
  };
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <Grid h="100vh" templateRows="auto 1fr">
        <Header />
        <Game />
      </Grid>
      <Modal {...modalProps} isCentered hideCloseButton>
        <ModalContent />
      </Modal>
    </>
  );
};

export default App;
