import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Center } from "@chakra-ui/react";
import { selectSpace } from "../../../redux";
import { turnValue } from "../../../utils";
import Disc from "./Disc";

const Space = ({ value, coordinate }) => {
  const dispatch = useDispatch();
  const turn = useSelector(({ progression }) => progression.turn);
  const onSelect = e => {
    e.stopPropagation();
    dispatch(selectSpace(coordinate, turnValue(turn)));
  };
  return (
    <Center onClick={onSelect} bgColor="board.default" borderRadius={2}>
      {value ? <Disc value={value} /> : null}
    </Center>
  );
};

Space.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  coordinate: PropTypes.object.isRequired,
};

export default Space;
