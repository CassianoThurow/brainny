import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import HeroImg from '../assets/hero.png';
import Smoke from '../assets/smoke.svg';
import Star from '../assets/star.svg';

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <Flex
      position="relative"
      flexDirection={['column', 'row']}
      alignItems="center"
      justifyContent="space-between"
      color="white"
    >
      <Box width={['100%', '50%']} padding="3rem">
        <Heading as="h2" variant="h2Style" marginBottom="1rem">
          Esquece o ponto manual
        </Heading>
        <Heading as="h1" variant="h1Style" marginBottom="1rem">
          Chegou a nova realidade para{' '}
          <Text as="span" variant="specialSpan">
            Controle de Pontos
          </Text>
        </Heading>
        <Text as="p" variant="specialP" marginBottom="2rem">
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </Text>
        <Flex>
          <Button bg="secondary.500" size="lg" marginBottom="1rem">
            Assinar agora
          </Button>
          <Button
            variant="outline"
            borderColor="white"
            color="white"
            size="lg"
            marginLeft="1rem"
          >
            Ver planos
          </Button>
        </Flex>
      </Box>
      <Box width={['100%', '50%']} height={['auto', '100%']}>
        <MotionBox
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <img
            src={HeroImg}
            alt="Descrição da imagem"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </MotionBox>
        <Box position="absolute" top="-140px" right="0" zIndex='1'>
          <img src={Smoke} alt="Descrição da imagem 1" />
        </Box>
        <Box position="absolute" bottom="0" right="50%">
          <img src={Star} alt="Descrição da imagem 2" />
        </Box>
      </Box>
    </Flex>
  );
};

export default Hero;
