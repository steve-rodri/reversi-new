import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const TurnIndicator = () => {
  const { players = [], progression } = useSelector(state => state);
  const player = players.find(player => player.color === progression.turn);
  if (!player) return null;
  return (
    <Flex align="center">
      <Text fontSize="md" mr={1}>
        Turn:
      </Text>
      <Heading as="h4" fontSize="lg">
        {player.name}
      </Heading>
    </Flex>
  );
};

export default TurnIndicator;
