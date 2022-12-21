/* Este componente muestra los links con los distintos tipos para visualizar, ejemplo: en streaming, tv, peliculas, etc */

import { Box, Text } from "@chakra-ui/react";

export const MovieLinkElement = ({ id, name, handleClick, isSelected }) => {
  return (
    <Box position={"relative"} top={0} left={0}>
      <Text
        as={"h3"}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"4px 20px"}
        whiteSpace={"nowrap"}
      >
        <Text
          as={"a"}
          color={isSelected ? "white" : "rgba(3, 37, 65, 1)"}
          fontWeight={"600"}
          cursor={"pointer"}
          onClick={() => handleClick(id, name)}
          fontSize={"16"}
        >
          {name}
        </Text>
      </Text>
      <Box
        bg={isSelected ? "rgba(3, 37, 65, 1)" : ""}
        position={"absolute"}
        top={0}
        left={0}
        width="100%"
        height={"100%"}
        zIndex={"-1"}
        rounded={"full"}
      ></Box>
    </Box>
  );
};
