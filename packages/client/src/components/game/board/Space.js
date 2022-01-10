import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { animated, useTransition } from "react-spring";
import { Center } from "@chakra-ui/react";
import { getCurrentPlayer, fullWord } from "../../../utils";
import { handleSpaceSelect } from "../../../redux";
import Disc from "./Disc";

const Space = ({ coordinate, value }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const discMountTransition = useDiscMountTransition(!!value);
  const onSelect = e => {
    e.stopPropagation();
    const player = getCurrentPlayer(state);
    dispatch(handleSpaceSelect({ coordinate, player }));
  };
  const AnimatedDisc = animated(Disc);
  return (
    <Center onClick={onSelect} bgColor="board.default" borderRadius={2}>
      {discMountTransition(
        (style, item) =>
          item && <AnimatedDisc value={fullWord(value)} style={style} />
      )}
    </Center>
  );
};

Space.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  coordinate: PropTypes.object.isRequired,
};

const useDiscMountTransition = value => {
  return useTransition(value, {
    from: { y: -50, scale: 1.25 },
    enter: { y: 0, scale: 1.0 },
  });
};

export default Space;
