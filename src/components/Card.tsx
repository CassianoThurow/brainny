import React from 'react';
import { Box, Text, List, ListItem, HStack } from '@chakra-ui/react';

interface Feature {
  name: string;
  available: boolean;
}

interface CardProps {
  title: string;
  price: string;
  userCount: string;
  features: Feature[];
  style?: React.CSSProperties;
}

const CheckIcon: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M14.328 4.46611C14.4048 4.38778 14.4964 4.32554 14.5975 4.28306C14.6986 4.24057 14.8072 4.21869 14.9169 4.21869C15.0266 4.21869 15.1352 4.24057 15.2363 4.28306C15.3374 4.32554 15.4291 4.38778 15.5059 4.46611C15.8276 4.79124 15.8321 5.31661 15.5171 5.64736L8.86498 13.5111C8.78945 13.5941 8.6978 13.6607 8.59563 13.707C8.49346 13.7533 8.38291 13.7783 8.27076 13.7804C8.15861 13.7825 8.04721 13.7617 7.94337 13.7193C7.83953 13.6768 7.74544 13.6137 7.66685 13.5336L3.6191 9.43186C3.46299 9.27266 3.37555 9.05858 3.37555 8.83562C3.37555 8.61265 3.46299 8.39857 3.6191 8.23936C3.69588 8.16103 3.78751 8.09879 3.88864 8.05631C3.98977 8.01382 4.09835 7.99194 4.20804 7.99194C4.31773 7.99194 4.42631 8.01382 4.52744 8.05631C4.62857 8.09879 4.7202 8.16103 4.79698 8.23936L8.23048 11.719L14.3055 4.49086C14.3125 4.48217 14.32 4.47391 14.328 4.46611Z" fill="white"/>
</svg>
);

const CrossIcon: React.FC = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g opacity="0.3">
    <path d="M10.0575 8.9999L13.2825 5.7824C13.4237 5.64117 13.5031 5.44962 13.5031 5.2499C13.5031 5.05017 13.4237 4.85862 13.2825 4.71739C13.1413 4.57617 12.9497 4.49683 12.75 4.49683C12.5503 4.49683 12.3587 4.57617 12.2175 4.71739L9.00002 7.9424L5.78252 4.71739C5.64129 4.57617 5.44974 4.49683 5.25002 4.49683C5.05029 4.49683 4.85874 4.57617 4.71752 4.71739C4.57629 4.85862 4.49695 5.05017 4.49695 5.2499C4.49695 5.44962 4.57629 5.64117 4.71752 5.7824L7.94252 8.9999L4.71752 12.2174C4.64722 12.2871 4.59142 12.3701 4.55335 12.4615C4.51527 12.5529 4.49567 12.6509 4.49567 12.7499C4.49567 12.8489 4.51527 12.9469 4.55335 13.0383C4.59142 13.1297 4.64722 13.2127 4.71752 13.2824C4.78724 13.3527 4.87019 13.4085 4.96158 13.4466C5.05298 13.4846 5.15101 13.5042 5.25002 13.5042C5.34902 13.5042 5.44705 13.4846 5.53845 13.4466C5.62984 13.4085 5.71279 13.3527 5.78252 13.2824L9.00002 10.0574L12.2175 13.2824C12.2872 13.3527 12.3702 13.4085 12.4616 13.4466C12.553 13.4846 12.651 13.5042 12.75 13.5042C12.849 13.5042 12.9471 13.4846 13.0384 13.4466C13.1298 13.4085 13.2128 13.3527 13.2825 13.2824C13.3528 13.2127 13.4086 13.1297 13.4467 13.0383C13.4848 12.9469 13.5044 12.8489 13.5044 12.7499C13.5044 12.6509 13.4848 12.5529 13.4467 12.4615C13.4086 12.3701 13.3528 12.2871 13.2825 12.2174L10.0575 8.9999Z" fill="white"/>
  </g>
</svg>
);

const Card: React.FC<CardProps> = ({ title, price, userCount, features }) => {
  return (
    <Box
      borderRadius="10px"
      border="1px solid"
      borderColor="#8A53FF"
      background="rgba(255, 255, 255, 0.08)"
      backdropFilter="blur(2.5px)"
      p={4}
      textAlign="center"
    >
      <Text 
        style={{
          color: '#FFF',
          fontFamily: 'Poppins',
          fontSize: '50px',
          fontWeight: 800,
        }}
      >
        {title}
      </Text>
      <Text 
        style={{
          color: '#FFF',
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 400,
        }}
      >
        {price}
      </Text>
      <Text 
        style={{
          color: 'var(--secundary-color, #8A53FF)',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 300,
        }}
      >
        {userCount}
      </Text>
      <List spacing={2} mt={4}>
        {features.map((feature, index) => (
          <ListItem
            key={index}
            style={{
              opacity: feature.available ? '1' : '0.3',
            }}
          >
            <HStack spacing={2}>
              {feature.available ? <CheckIcon /> : <CrossIcon />}
              <Text 
                style={{
                  color: '#FFF',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontWeight: 300,
                }}
              >
                {feature.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Card;
