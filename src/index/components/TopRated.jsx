import { useState } from "react";
import { Text, Stack, Box, Select } from "@chakra-ui/react";

import { useWindowSize } from "@src/hooks/useWindowSize";
import { api, defineType } from "@src/api";
import { MovieLinkElement } from "@src/layout";

import { MovieList } from "./MovieList";

export const TopRated = () => {
  const [selected, setSelected] = useState({
    id: 1,
    name: "TopRatedMovies",
  });

  const { width } = useWindowSize();

  const handleClick = (id, name) => {
    setSelected({
      id,
      name: `TopRated${name}`,
    });
  };

  const handleChange = (e) => {
    const name = e.target.value;
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const id = el.getAttribute("id");

    console.log(selected);
    setSelected({
      id,
      name: `TopRated${name}`,
    });
  };

  return (
    <>
      <Box px={{ base: 4, md: 8, xl: 14 }} py={"15px"}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          gap={2}
          justify={width > 768 ? "" : "space-between"}
          mb={6}
        >
          <Text
            as={"h1"}
            fontSize={{ base: "1.3rem", md: "1.6rem" }}
            fontWeight={"600"}
            mb={"5px"}
          >
            Aclamadas por la critica
          </Text>
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"stretch"}
            border={"1px solid rgba(3, 37, 65, 1)"}
            rounded={"full"}
          >
            {width > 768 ? (
              <>
                {topRatedLinks.map((link) => {
                  return (
                    <MovieLinkElement
                      {...link}
                      handleClick={(id, name) => handleClick(id, name)}
                      isSelected={selected.id === link.id}
                      key={link.id}
                    />
                  );
                })}
              </>
            ) : (
              <Select
                bg={"rgba(3, 37, 65, 1)"}
                color={"red"}
                rounded={"full"}
                border={"none"}
                height={"30px"}
                onChange={handleChange}
              >
                {topRatedLinks.map((link) => {
                  return (
                    <option key={link.id} id={link.id} value={link.name}>
                      {link.name}
                    </option>
                  );
                })}
              </Select>
            )}
          </Box>
        </Stack>
        <MovieList
          url={request[selected.name]}
          type={defineType[selected.name]}
        />
      </Box>
    </>
  );
};
