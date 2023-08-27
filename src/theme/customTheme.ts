import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    theme: {
      "100": "#120039",
    },
    primary: {
      500: '#330693',
    },
    secondary: {
      500: '#8A53FF',
    },
    gray: {
      500: '#20292E',
    },
    white: {
      500: '#FFFFFF',
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    navbar: 'Poppins, sans-serif',
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    bold: '700',
  },
  textStyles: {
    navbarItem: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'white',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
        },
        navbar: {
          bg: 'white',
          color: 'primary.500',
          padding: '13px 37px',
          fontWeight: '400',
          fontSize: '16px',
          height: '50px',
          borderRadius: '5px',
        },
      },
    },
    Heading: {
      variants: {
        h2Style: {
          color: '#FFF',
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 'light',
          lineHeight: 'normal',
          letterSpacing: '3.96px',
          textTransform: 'uppercase',
        },
        h1Style: {
          color: '#FFF',
          fontFamily: 'Poppins',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: '800',
          lineHeight: 'normal',
        },
      },
    },
    Text: {
      variants: {
        specialSpan: {
          color: '#8A53FF',
          fontFamily: 'Poppins',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: '800',
          lineHeight: 'normal',
        },
        specialP: {
          color: '#FFF',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 'medium',
          lineHeight: 'normal',
        },
      },
    },
  },
});

export default theme;
