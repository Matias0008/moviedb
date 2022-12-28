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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
import { NavLink, useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  document.body.style.overflowY = isOpen ? "hidden" : "scroll";

  return (
    <>
      <Box
        bg={"primary"}
        px={{ base: 2, md: 4 }}
        position={"fixed"}
        top={0}
        w="100%"
        zIndex={999}
      >
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
            <Box>
              <Img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                width={"50px"}
                onClick={() => navigate("/")}
              ></Img>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

const Sidebar = ({ isOpen, setIsOpen }) => {
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
        <Stack alignItems={"start"} height={"100%"} fontSize={20} py={4}>
          <Accordion
            allowMultiple
            color={"white"}
            fontSize={20}
            w="100%"
            defaultIndex={[0, 1]}
          >
            {links.map((link) => {
              return (
                <MenuLink
                  name={link.name}
                  actions={link.actions}
                  setIsOpen={setIsOpen}
                  key={link.name}
                />
              );
            })}
          </Accordion>
        </Stack>
      </Box>
    </>
  );
};

const MenuLink = ({ name, actions, setIsOpen }) => {
  return (
    <>
      <AccordionItem border={"none"}>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={20}
              fontWeight={"bold"}
            >
              {name}
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {actions.map((action) => {
            const { path } = action;
            return (
              <Stack key={action.name} fontSize={18}>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "active-link" : ""}`
                  }
                  to={path}
                  onClick={() =>
                    setTimeout(() => {
                      setIsOpen(false);
                    }, 100)
                  }
                >
                  {action.name}
                </NavLink>
              </Stack>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};
