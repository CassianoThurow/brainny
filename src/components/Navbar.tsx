import {
    Box,
    Flex,
    Button,
    Link,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react';
  import { HamburgerIcon } from '@chakra-ui/icons';
  import Logo from '../assets/whiteLogo.png';
  
  const Navbar = () => {
    return (
      <Flex
        as="nav"
        position="relative"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="3rem"
        bg="transparent"
        color="white"
        zIndex={999}
      >
        <Flex align="center" mr={5}>
            <img src={Logo} alt="Logo" />
        </Flex>
  
        <Spacer />
  
        <Box display={{ base: "none", md: "flex" }} alignItems="center">
          <Link textStyle="navbarItem" mr={12}>Inicio</Link>
          <Link textStyle="navbarItem" mr={10}>Planos</Link>
          <Button variant="navbar">Fazer Login</Button>
        </Box>
  
        <Box display={{ base: "flex", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="solid"
              size="lg"
              bg="transparent"
            />
            <MenuList bg="transparent" padding={2}>
              <MenuItem textStyle="navbarItem">Inicio</MenuItem>
              <MenuItem textStyle="navbarItem">Planos</MenuItem>
              <Button variant="navbar">Fazer Login</Button>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    );
  };
  
  export default Navbar;
  