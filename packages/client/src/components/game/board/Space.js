import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Center } from "@chakra-ui/react";
import { handleSpaceSelect } from "../../../redux";
import { fullWord, getCurrentPlayer } from "../../../utils";
import Disc from "./Disc";

const Space = ({ value, coordinate }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const onSelect = e => {
    e.stopPropagation();
    const player = getCurrentPlayer(state);
    dispatch(handleSpaceSelect({ coordinate, player }));
  };
  return (
    <Center onClick={onSelect} bgColor="board.default" borderRadius={2}>
      {value ? <Disc value={fullWord(value)} /> : null}
    </Center>
  );
};

Space.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  coordinate: PropTypes.object.isRequired,
};

export default Space;
