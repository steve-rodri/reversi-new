import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Center } from "@chakra-ui/react";
import { handleSpaceSelect } from "../redux/slices";
import Disc from "./Disc";

const Space = ({ value, coordinate }) => {
  const dispatch = useDispatch();
  const turn = useSelector(state => state.turn);
  const onClick = e => {
    e.stopPropagation();
    dispatch(handleSpaceSelect({ coordinate, turn }));
  };
  return (
    <Center onClick={onClick} bgColor="board.default" borderRadius={2}>
      {value !== "x" ? <Disc value={value} /> : null}
    </Center>
  );
};

Space.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  coordinate: PropTypes.object.isRequired,
};

export default Space;
