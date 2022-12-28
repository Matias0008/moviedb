import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Title = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const { width } = useWindowSize();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) onSubmit(inputValue);
  };

  return (
    <>
      <Box
        as={"section"}
        className={"section-title"}
        position={width <= 768 ? "sticky" : ""}
      >
        <Stack
          direction={"column"}
          justify={"center"}
          height={"100%"}
          maxW={"100%"}
          px={{ base: 4, md: "16px", lg: 8, xl: 14 }}
        >
          <Text as={"h1"} fontSize={"3rem"} color="white" fontWeight={"bold"}>
            Bienvenido.
            <Text
              fontSize={{ base: "1.5rem", md: "2rem" }}
              fontWeight={"bold"}
              mt={0}
            >
              Millones de películas, programas de televisión y personas por
              descubrir. Explora ahora.
            </Text>
          </Text>
          <Stack
            direction={"row"}
            pt={8}
            pb={8}
            align={"center"}
            as={"form"}
            onSubmit={handleSubmit}
          >
            <Input
              placeholder={`${
                width <= 768
                  ? "Buscar..."
                  : "Busca una pelicula, programa de television, persona..."
              }`}
              rounded={"full"}
              height={"46px"}
              background={"white"}
              color={"black"}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              rounded={"full"}
              color={"white"}
              className={"button-index"}
              height={"46px"}
              width={"100px"}
              fontWeight={"bold"}
              type="submit"
            >
              Buscar
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
