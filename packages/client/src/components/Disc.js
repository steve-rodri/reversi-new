import React from "react";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";

const Disc = ({ value }) => {
  const bgColor = value ? "white" : "black";
  return <Circle bgColor={bgColor} h="75%" w="75%" />;
};

Disc.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Disc;
