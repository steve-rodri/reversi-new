import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Center } from "@chakra-ui/react";
import { handleSpaceSelect } from "../../../redux";
import { firstLetter, fullWord } from "../../../utils";
import Disc from "./Disc";

const Space = ({ value, coordinate }) => {
  const dispatch = useDispatch();
  const turn = useSelector(({ progression }) => firstLetter(progression.turn));
  const onSelect = e => {
    e.stopPropagation();
    dispatch(handleSpaceSelect(coordinate, turn));
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
