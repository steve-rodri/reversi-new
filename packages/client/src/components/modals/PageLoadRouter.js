import React, { useState } from "react";
import { ChooseGameType, ChooseColor, EnterPlayerInfo } from ".";

export const PageLoadRouter = props => {
  const [modalView, setModalView] = useState("choose-game-type");
  props = { ...props, setModalView };
  switch (modalView) {
    default:
      return <ChooseGameType {...props} />;
    case "choose-color":
      return <ChooseColor {...props} />;
    case "enter-player-1":
      return <EnterPlayerInfo {...props} num={1} />;
    case "enter-player-2":
      return <EnterPlayerInfo {...props} num={2} />;
  }
};

export default PageLoadRouter;
