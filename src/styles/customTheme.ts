import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    customColor: {
      100: "#f5d6d9",
      500: "#c34a60",
      700: "#983242",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "customColor.500",
          color: "white",
        },
      },
    },
  },
});

export default theme;
