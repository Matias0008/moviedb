import { Box, Container } from "@chakra-ui/react";

import { Title } from "./Title";
import { SectionLayout } from "../layout";

export const Index = () => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <Box
        px={{ base: 0, md: 0, xl: 4 }}
        height={"calc(100% - 64px)"}
        position={"sticky"}
        zIndex={"1"}
      >
        <Container
          maxW={"1300px"}
          height={"100%"}
          width={"100%"}
          px={{ base: 0, md: 0 }}
          mx={"auto"}
        >
          <Title onSubmit={(value) => onSubmit(value)} />
          <SectionLayout
            links={mostPopularLinks}
            initialNameLink={"En streaming"}
          />
          <SectionLayout
            links={topRatedLinks}
            initialNameLink={"TopRatedPeliculas"}
            prefix={"TopRated"}
          />
        </Container>
      </Box>
    </>
  );
};

const mostPopularLinks = [
  {
    name: "En streaming",
    id: 1,
  },
  {
    name: "En television",
    id: 2,
  },
  {
    name: "En alquiler",
    id: 3,
  },
  {
    name: "En cines",
    id: 4,
  },
];

const topRatedLinks = [
  {
    name: "Peliculas",
    id: 1,
  },
  {
    name: "Television",
    id: 2,
  },
];
