import { useEffect, useState } from 'react';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import bgImage from './assets/bg.png';
import BussLogo from './assets/dotBus.svg';
import BrainnyLogo from './assets/brainnyLogo.svg';
import GoStuddyLogo from './assets/gostudy.svg';
import AmoPetLogo from './assets/amoPet.svg';
import Smoke from './assets/smoke2.svg';
import Star from './assets/star2.svg';
import { motion, useAnimation } from 'framer-motion';
import PlanSlider from './components/Caroussel';

export default function App() {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: 1,
        opacity: 0.5,
        transition: { duration: 2 },
      });
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 2 },
      });
    };

    if (isAnimating) {
      sequence().then(() => setIsAnimating(false));
    } else {
      setIsAnimating(true);
    }
  }, [isAnimating, controls]);

  


  return (
    <Box
      bg="theme.100"
      minHeight="100vh"
      bgImage={bgImage}
      position="relative"
      overflow="hidden"
    >
      <Navbar />
      <Hero />
      <Box margin="0 auto" width="100%">
        <Flex
          flexDirection={['column', 'row']}
          alignItems="center"
          justifyContent="space-evenly"
          padding="3rem"
          position="relative"
          zIndex="20"
        >
          <img src={BrainnyLogo} alt="BrainnyLogo" />
          <img src={AmoPetLogo} alt="AmoPetLogo" />
          <img src={BussLogo} alt="BussLogo" />
          <img src={GoStuddyLogo} alt="GoStuddyLogo" />
        </Flex>
        <Box position="absolute" top="350px" left="0" zIndex="3">
          <img src={Smoke} alt="Smoke description" />
        </Box>
        <Box position="absolute" top="900px" right="200" zIndex="1">
          <motion.img
            initial={{ scale: 1, opacity: 1 }}
            animate={controls}
            src={Star}
            alt="Star description"
            loading="lazy"
          />
        </Box>
      </Box>
      <Box
        position="relative"
        zIndex="40"
        margin="0 auto"
        justifyContent="center"
        padding="90px 0"
        maxWidth="700px"
        textAlign="center"
      >
        <Flex flexDirection="column" gap="10px">
          <Heading as="h2" variant="h1Style">
            Encontre o plano perfeito
          </Heading>
          <Text as="p" variant="specialP">
            Escolha o plano que melhor se encaixa na sua empresa e faça sua
            assinatura, dentro de 72h iremos liberar seus acessos.
          </Text>
        </Flex>
        <Box m="60px 0">
          <PlanSlider />
        </Box>
      </Box>
    </Box>
  );
}
