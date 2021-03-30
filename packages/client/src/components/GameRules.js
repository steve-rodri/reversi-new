import React from "react";
import { VStack, Text } from "@chakra-ui/react";

const GameRules = () => {
  <VStack as="ul">
    <Text as="li">Black always moves first.</Text>
    <Text as="li">
      If on your turn you can not outflank and flip at least one opposing disc,
      your turn is forfeited and your opponent moves again. However if a move is
      available to you, you may not forfeit your turn.
    </Text>
    <Text as="li">
      A disc may outflank any number of discs in one or more rows in any number
      of directions at the same time - horizontally vertically or diagonally
    </Text>
    <Text as="li">
      You may not skip over your own color disc to outflank an opposing disc.
    </Text>
    <Text as="li">
      Discs may only be outflanked as a direct result of a move and must fall in
      the direct line of the disc placed down.
    </Text>
    <Text as="li">
      All discs outflanked in any one move must be flipped, even if it is to the
      player&#39;s advantage not to flip them at all.
    </Text>
    <Text as="li">
      Once a disc is placed on a square, it can never be moved to another square
      later in the game.
    </Text>
    <Text as="li">
      When it is no longer possible for either player to move, the game is over.
      Discs are counted and the player with the majority of his or her color
      discs on the board is the winner.
    </Text>
  </VStack>;
};

export default GameRules;
