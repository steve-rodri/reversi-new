import React, { useEffect } from "react";
import Proptypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@chakra-ui/react";
import { boardActions } from "../../../redux";
import Space from "./Space";

const Board = ({ size }) => {
  const dispatch = useDispatch();
  const { spaces, length } = useSelector(state => state.board);
  useEffect(() => {
    dispatch(boardActions.initialize());
    dispatch(boardActions.setStartingDiscs());
  }, []);
  return (
    <Grid
      templateRows={`repeat(${length}, auto)`}
      templateColumns={`repeat(${length}, auto)`}
      gap="2px"
      h={[size - 16, size - 50, size - 50, size - 100]}
      w={[size - 16, size - 50, size - 50, size - 100]}
    >
      {spaces.map((row, y) =>
        row.map((value, x) => (
          <Space value={value} key={`${x}, ${y}`} coordinate={{ x, y }} />
        ))
      )}
    </Grid>
  );
};

Board.propTypes = {
  size: Proptypes.number,
};

export default Board;
