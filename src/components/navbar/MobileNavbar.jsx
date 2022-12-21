import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  useColorMode,
  Container,
  Icon,
  Img,
} from "@chakra-ui/react";

import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";

import { links } from "../../data/navlinks";
import { useState } from "react";

export default function MobileNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box bg={"primary"} px={{ base: 2, md: 4 }}>
        <Container maxW={"1300px"} px={{ base: 2, md: 4 }}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Stack color={"white"} direction={"row"} gap={8}>
              <Icon
                as={isOpen ? CloseIcon : HamburgerIcon}
                boxSize={6}
                cursor={"pointer"}
                onClick={() => setIsOpen(!isOpen)}
              />
            </Stack>
            <Img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              width={"50px"}
            ></Img>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Sidebar isOpen={isOpen} />
    </>
  );
}

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <Box
        height={"calc(100% - 64px)"}
        width={"92%"}
        backdropFilter={"blur(15px)"}
        backgroundColor={"rgba(3,37,65, 0.9)"}
        position="fixed"
        left={!isOpen ? "-1000px" : "0px"}
        transition={"left ease .3s"}
        zIndex={"9999"}
      >
        <Stack alignItems={"start"} padding={8} height={"100%"} fontSize={20}>
          {links.map((link) => {
            return (
              <MenuLink
                name={link.name}
                actions={link.actions}
                key={link.name}
              />
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

const MenuLink = ({ name, actions }) => {
  return (
    <Menu>
      <MenuButton
        transition="all 0.2s"
        _focus={{ boxShadow: "outline" }}
        fontWeight={"bold"}
        color={"white"}
      >
        {name} <ChevronDownIcon />
      </MenuButton>
      <MenuList color={"black"}>
        {actions.map((action) => {
          return <MenuItem key={action.name}>{action.name}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};
