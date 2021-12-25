import React from "react";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";

const Disc = ({ value }) => {
  const bgColor = (() => {
    if (value === "w") return "white";
    if (value === "b") return "black";
  })();
  return <Circle bgColor={bgColor} h="75%" w="75%" />;
};

Disc.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Disc;
