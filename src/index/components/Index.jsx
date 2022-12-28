import { Box, Container } from "@chakra-ui/react";

import { Title } from "./Title";
import { SectionLayout } from "../layout";
import { useNavigate } from "react-router-dom";

export const Index = () => {
  document.title = "The Movie Database (TMDB)";
  const navigate = useNavigate();
  const onSubmit = (value) => {
    navigate(`/search?query=${value}`);
  };

  return (
    <>
      <Box px={{ base: 0, md: 0, xl: 4 }} position={"sticky"} zIndex={"1"}>
        <Container
          maxW={"1300px"}
          height={"100%"}
          width={"100%"}
          px={{ base: 0, md: 0 }}
          mx={"auto"}
        >
          <Title onSubmit={(value) => onSubmit(value)} />
          <SectionLayout
            title={"Lo más popular"}
            links={mostPopularLinks}
            initialNameLink={"Enstreaming"}
          />
          <SectionLayout
            title={"Tendencias"}
            links={trendingLinks}
            initialNameLink={"TrendingHoy"}
            prefix={"Trending"}
          />
          <SectionLayout
            title={"Mejor valoradas"}
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

const trendingLinks = [
  { id: 1, name: "Hoy" },
  {
    id: 2,
    name: "Esta semana",
  },
];
