import React, { useEffect } from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";
import PageLoadModalRouter from "./PageLoadModalRouter";
import Modal from "./Modal";
import Header from "./Header";
import Game from "./game";

export const App = () => {
  const { onOpen: openModal, ...modalProps } = useDisclosure();
  useEffect(() => {
    openModal();
  }, []);
  return (
    <>
      <Grid h="100vh" templateRows="auto 1fr">
        <Header />
        <Game />
      </Grid>
      <Modal {...modalProps} isCentered hideCloseButton>
        <PageLoadModalRouter closeModal={modalProps.onClose} />
      </Modal>
    </>
  );
};

export default App;
