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
  Img,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { links } from "@src/data/navlinks";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <>
      <Box
        bg={"primary"}
        px={4}
        position={"fixed"}
        top={0}
        zIndex={999}
        w="100%"
      >
        <Container maxW={"1200px"} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Stack color={"white"} direction={"row"} gap={8} zIndex={"999"}>
              <Img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                width={"150px"}
                onClick={() => navigate("/")}
                cursor={"pointer"}
              ></Img>
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
          </Flex>
        </Container>
      </Box>
    </>
  );
}

const MenuLink = ({ name, actions }) => {
  return (
    <Menu>
      <MenuButton
        transition="all 0.2s"
        _focus={{ boxShadow: "outline" }}
        fontWeight={"bold"}
      >
        {name} <ChevronDownIcon />
      </MenuButton>
      <MenuList color={"black"}>
        {actions.map((action) => {
          const { path } = action;
          return (
            <MenuItem key={action.name}>
              <Link to={path}>{action.name}</Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
