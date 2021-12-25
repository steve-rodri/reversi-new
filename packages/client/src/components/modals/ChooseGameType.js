import React from "react";
import { VStack, Heading, Button, Divider, Grid } from "@chakra-ui/react";

export const ChooseGameType = () => {
  return (
    <Grid autoFlow="column" justifyContent="space-evenly">
      <Online />
      <Divider orientation="vertical" />
      <Local />
    </Grid>
  );
};

const Online = () => {
  return (
    <VStack spacing={3} py={6}>
      <Heading as="h3" fontSize="2xl">
        Online
      </Heading>
      <Button>vs. Random</Button>
      <Button w="full">Use Code</Button>
    </VStack>
  );
};

const Local = () => {
  return (
    <VStack spacing={3} py={6}>
      <Heading as="h3" fontSize="2xl">
        Local
      </Heading>
      <Button onClick={}>One Player</Button>
      <Button>Two Player</Button>
    </VStack>
  );
};
