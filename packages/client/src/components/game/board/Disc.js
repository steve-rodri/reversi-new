import React from "react";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";

const Disc = ({ value }) => {
  return <Circle bgColor={value} h="75%" w="75%" />;
};

Disc.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Disc;
