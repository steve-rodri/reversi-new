import React from "react";
import { useSelector } from "react-redux";
import { Grid, VStack, Heading, Text, Divider } from "@chakra-ui/react";

export const Scoreboard = () => {
  const { players } = useSelector(state => state);
  const [one, two] = players;
  if (!one?.gamesWon && !two?.gamesWon) return null;
  return (
    <Grid autoFlow="column" gap={4} justifyContent="center" m={10}>
      <VStack>
        <Heading as="h3" fontSize="lg">
          {one.name}
        </Heading>
        <Text fontSize="md">{one.gamesWon}</Text>
      </VStack>
      <Divider orientation="vertical" />
      <VStack>
        <Heading as="h3" fontSize="lg">
          {two.name}
        </Heading>
        <Text fontSize="md">{two.gamesWon}</Text>
      </VStack>
    </Grid>
  );
};

export default Scoreboard;
