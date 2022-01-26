import React, { useRef } from "react";
import { useSpring } from "react-spring";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";

const Disc = ({ value }) => {
  const flip = useFlip(value);
  return <Circle bgColor={value} h="75%" w="75%" style={flip} />;
};

Disc.propTypes = {
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const useFlip = value => {
  const previous = useRef(value);
  const styles = useSpring({ scale: previous.current !== value ? 0.8 : 1 });
  previous.current = value;
  return styles;
};

export default Disc;

//   return flipTransition(
//     (props, item) =>
//       item && <AnimatedCircle style={props} bgColor={value} h="75%" w="75%" />
