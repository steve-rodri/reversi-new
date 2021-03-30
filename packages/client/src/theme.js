import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    board: {
      default: "rgba(27, 105, 72, 0.78)",
    },
  },
  components: {
    Circle: {
      variants: {
        "white-disc": {
          bgGradient: "radial(rgba(69,69,69, 1), rgba(0,0,0,0.85))",
          borderColor: "rgba(99,99,99,0.85)",
        },
        "black-disc": {
          bgGradient: "radial(rgba(255,255,255, 1), rgba(222,222,222,0.85))",
          borderColor: "rgba(210,210,210,0.85)",
        },
      },
    },
    Heading: {
      variants: {
        title: {
          fontFamily: "Didot",
        },
      },
    },
  },
});

export default theme;
