import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AspectRatio, Box, Grid } from "@chakra-ui/react";
import { boardActions } from "../redux";
import Space from "./Space";

const Board = () => {
  const dispatch = useDispatch();
  const { spaces, length } = useSelector(state => state.board);
  useEffect(() => {
    dispatch(boardActions.initialize());
    dispatch(boardActions.setStartingDiscs());
  }, []);
  return (
    <AspectRatio ratio={1} minH="300px" minW="300px">
      <Box>
        <Grid
          templateRows={`repeat(${length}, auto)`}
          templateColumns={`repeat(${length}, auto)`}
          gap="2px"
          h="full"
          w="full"
        >
          {spaces.map((row, y) =>
            row.map((value, x) => (
              <Space value={value} key={`${x}, ${y}`} coordinate={{ x, y }} />
            ))
          )}
        </Grid>
      </Box>
    </AspectRatio>
  );
};

export default Board;
