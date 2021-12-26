import React, { useEffect } from "react";
import { Grid, useDisclosure } from "@chakra-ui/react";
import { ChooseGameType, ChooseColor, EnterPlayerInfo } from "./modals";
import Modal from "./Modal";
import Header from "./Header";
import Game from "./game";

const App = () => {
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
        <ModalContent {...modalContentProps} />
      </Modal>
    </>
  );
};

const ModalContent = props => {
  const [modalView, setModalView] = useState("choose-game-type");
  props = { ...props, setModalView };
  if (modalView === "choose-game-type") return <ChooseGameType {...props} />;
  if (modalView === "choose-color") return <ChooseColor {...props} />;
  if (modalView === "enter-player-1")
    return <EnterPlayerInfo num={1} {...props} />;
  if (modalView === "enter-player-2")
    return <EnterPlayerInfo num={2} {...props} />;
};
export default App;
