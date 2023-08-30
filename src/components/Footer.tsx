import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <>
      <Box border="0.5px solid #8A53FF" width="100%" />
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection="row"
        py={4}
      >
        <Box marginRight={4}>
          <Text
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="500"
            color="#FFF"
          >
            @pontogo
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="14px"
            fontWeight="400"
            color="#FFF"
          >
            Se conecta com a gente.
          </Text>
        </Box>
        <Flex>
          <Image src={Facebook} alt="Facebook" boxSize="24px" marginRight={2} />
          <Image
            src={Instagram}
            alt="Instagram"
            boxSize="24px"
            marginRight={2}
          />
          <Image src={Linkedin} alt="Linkedin" boxSize="24px" />
        </Flex>
      </Flex>
      <Box border="0.5px solid #8A53FF" width="100%" />

      <Box p="90px">
        <Text
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="500"
          color="#FFF"
          textAlign="center"
        >
          PontoGo - Todos direitos reservados
        </Text>
      </Box>
    </>
  );
};

export default Footer;
