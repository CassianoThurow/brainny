import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import bgImage from './assets/bg.png'

export default function App() {
  return (
    <Box
      bg="theme.100"
      minHeight="100vh"
      bgImage={bgImage}
    >
      <Navbar />
      <Hero />
    </Box>
  );
}
