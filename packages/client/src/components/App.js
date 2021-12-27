import React from "react";
import { Grid, Center, Heading } from "@chakra-ui/react";
import Game from "./game";
import Scoreboard from "./Scoreboard";

export const App = () => {
  return (
    <>
      <Grid h="100vh" templateRows="auto 1fr">
        <Header />
        <Game />
        <Scoreboard />
      </Grid>
    </>
  );
};

const Header = () => {
  return (
    <Center>
      <Heading variant="title">Reversi</Heading>
    </Center>
  );
};

export default App;
