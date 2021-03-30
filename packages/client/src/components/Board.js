import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AspectRatio, Box, Grid } from "@chakra-ui/react";
import { initialize, setStartingDiscs } from "../redux/slices";
import Space from "./Space";

const Board = () => {
  const dispatch = useDispatch();
  const { length, spaces } = useSelector(state => state.board);
  useEffect(() => {
    dispatch(initialize());
    dispatch(setStartingDiscs());
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
            row.map((space, x) => (
              <Space value={space} key={`${x}, ${y}`} coordinate={{ x, y }} />
            ))
          )}
        </Grid>
      </Box>
    </AspectRatio>
  );
};

export default Board;
