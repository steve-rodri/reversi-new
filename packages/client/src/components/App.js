import React from "react";
import { Grid } from "@chakra-ui/react";
import Header from "./Header";
import Game from "./game";

const App = () => {
  return (
    <Grid h="100vh" templateRows="auto 1fr">
      <Header />
      <Game />
    </Grid>
  );
};

export default App;
