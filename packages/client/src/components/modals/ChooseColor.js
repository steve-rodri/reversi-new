import React from "react";
import { Grid, Center, VStack, Heading } from "@chakra-ui/react";
import Disc from "../game/board/Disc";

export const ChooseColor = () => {
  return (
    <VStack>
      <Heading>Choose Color:</Heading>
      <Grid>
        <BlackPiece />
        <WhitePiece />
      </Grid>
    </VStack>
  );
};

const BlackPiece = () => {
  return (
    <Center bgColor="board.default" borderRadius={2} boxSize={50}>
      <Disc value={0} />
    </Center>
  );
};

const WhitePiece = () => {
  return (
    <Center bgColor="board.default" borderRadius={2} boxSize={50}>
      <Disc value={1} />
    </Center>
  );
};

export default ChooseColor;
