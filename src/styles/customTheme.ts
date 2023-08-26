import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#330693",
    },
    secondary: {
      500: "#8A53FF",
    },
    gray: {
      500: "#20292E",
    },
    white: {
      500: "#FFFFFF",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    navbar: "Poppins, sans-serif",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "700",
  },
  textStyles: {
    navbarItem: {
      fontSize: "16px",
      fontWeight: "400",
      color: "white",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "medium",
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
        },
        navbar: {
          bg: "white",
          color: "primary.500",
          padding: "13px 37px",
          fontWeight: "400",
          fontSize: "16px",
          height: "50px",
          borderRadius: "5px",
        },
      },
    },
  },
});

export default theme;
