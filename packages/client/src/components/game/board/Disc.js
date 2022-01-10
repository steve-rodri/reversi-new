import React from "react";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";

const Disc = ({ value, ...rest }) => {
  return <Circle bgColor={value} h="75%" w="75%" {...rest} />;
};

Disc.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Disc;

//   return flipTransition(
//     (props, item) =>
//       item && <AnimatedCircle style={props} bgColor={value} h="75%" w="75%" />
