import { useParams } from "react-router-dom";
import { Box, Container, Image, Spinner, Stack, Text } from "@chakra-ui/react";

import { useFetch } from "@src/hooks/useFetch";
import { Cast } from "@src/layout";
import { api } from "@src/api";

import { Detail } from "./Detail";
import { Facts } from "./Facts";
import { LastSeason } from "./LastSeason";
import { useEffect } from "react";

export const TvDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const tvURL = api.links.requests.getOneTv(id);
  const creditsURL = api.links.requests.tvCredits(id);
  const keywordsURL = api.links.requests.keywords(id, "tv");

  const { data, isLoading } = useFetch(tvURL);
  const { data: credits, isLoading: isCreditsLoading } = useFetch(creditsURL);
  const { data: keywordsFetch, isLoading: isKeywordsLoading } =
    useFetch(keywordsURL);

  if (isLoading || isCreditsLoading || isKeywordsLoading) {
    return (
      <Stack h="100vh" justify={"center"} align="center">
        <Spinner />
      </Stack>
    );
  }

  const { seasons } = data;
  const { cast } = credits;
  const { results: keywords } = keywordsFetch;

  document.title = `${data.name} (TV Series ${data.first_air_date.slice(
    0,
    4
  )}) | The Movie Database (TMDB)`;

  const backdropImg = `${api.links.images.backdrop}${data.backdrop_path}`;
  const posterImg = `${api.links.images.poster}${data.poster_path}`;

  return (
    <Box width={"100%"}>
      <Box
        backgroundImage={`url(${backdropImg})`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"left calc((50vw - 170px) - 440px) top"}
        width={"100%"}
        height={"100%"}
      >
        <Box
          backgroundImage={
            "linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 30%, rgba(31.5, 31.5, 52.5, 0.84) 100%)"
          }
          width={"100%"}
          height={"100%"}
        >
          <Container
            maxW={"1200px"}
            px={{ base: 8, xl: 4 }}
            height={"100%"}
            py={{ base: 12 }}
          >
            <Stack
              height={"100%"}
              align={"center"}
              direction={{ base: "column", lg: "row" }}
              gap={8}
            >
              <Box
                width={{ base: 180, lg: 300 }}
                height={{ base: 250, lg: 450 }}
                flexShrink={0}
              >
                <Image
                  bg={"blue"}
                  width={"100%"}
                  height={"100%"}
                  rounded={"xl"}
                  src={posterImg}
                />
              </Box>
              <Stack>
                <Detail
                  {...data}
                  crew={data.created_by}
                  year={data.first_air_date.slice(0, 4)}
                />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Container
        maxW={"1200px"}
        px={{ base: 8, xl: 4 }}
        pt={7}
        pb={12}
        display={"flex"}
        columnGap={12}
        flexWrap={"wrap"}
        flexDir={"row"}
        justifyContent={"space-between"}
      >
        <Text
          as={"h2"}
          fontSize={"1.4rem"}
          fontWeight={"bold"}
          mb={3}
          width={"100%"}
          minW={"100%"}
        >
          Reparto de la serie
        </Text>
        <Cast cast={cast} movieId={id} type={"tv"}>
          <LastSeason
            lastSeason={
              seasons[seasons.length - 1].air_date &&
              seasons[seasons.length - 1].poster_path
                ? seasons[seasons.length - 1]
                : Number(seasons[seasons.length - 2]?.air_date.slice(0, 4)) <=
                  2022
                ? seasons[seasons.length - 2]
                : seasons[seasons.length - 1]
            }
            inProduction={data.in_production}
            movieName={data.name}
          />
        </Cast>
        <Facts {...data} keywords={keywords} />
      </Container>
    </Box>
  );
};
