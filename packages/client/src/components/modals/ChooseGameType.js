import React from "react";
import PropTypes from "prop-types";
import { VStack, Heading, Button, Divider, Grid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { playerActions } from "../../redux";

export const ChooseGameType = props => {
  return (
    <Grid autoFlow="column" justifyContent="space-evenly">
      <Online {...props} />
      <Divider orientation="vertical" />
      <Local {...props} />
    </Grid>
  );
};

const Online = () => {
  return (
    <VStack spacing={3} py={6}>
      <Heading as="h3" fontSize="2xl" mb={4}>
        Online
      </Heading>
      <Button>vs. Random</Button>
      <Button w="full">Use Code</Button>
    </VStack>
  );
};

const Local = ({ setModalView, setGameType }) => {
  const dispatch = useDispatch();
  const onOnePlayerPress = () => {
    setGameType("one-player-local");
    dispatch(playerActions.addPlayer({ num: 1, name: "Player" }));
    dispatch(playerActions.addPlayer({ num: 2, name: "CPU" }));
    setModalView("choose-color");
  };

  const onTwoPlayerPress = () => {
    setGameType("two-player-local");
    setModalView("enter-player-1");
  };
  return (
    <VStack spacing={3} py={6}>
      <Heading as="h3" fontSize="2xl" mb={4}>
        Local
      </Heading>
      <Button onClick={onOnePlayerPress}>One Player</Button>
      <Button onClick={onTwoPlayerPress}>Two Player</Button>
    </VStack>
  );
};

Local.propTypes = {
  setModalView: PropTypes.func,
  setGameType: PropTypes.func,
};
