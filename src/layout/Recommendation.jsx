import { useNavigate } from "react-router-dom";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import { api } from "@src/api";
import { useFetch } from "@src/hooks/useFetch";

export const Recommendation = ({ id, type }) => {
  const url = api.links.requests.getRecommendations(id, type);
  const { data, isLoading } = useFetch(url);
  const { results } = data;

  if (isLoading) return;
  // if (Boolean(data.len))

  return (
    <>
      <Stack pt={4}>
        <Text fontSize={"1.4rem"} fontWeight={"bold"} as={"h2"} mb={2}>
          Recomendaciones
        </Text>
        <Stack
          direction={"row"}
          overflowX={!Boolean(results.length) ? "" : "scroll"}
          overflowY={"hidden"}
          as="section"
          gap={2}
          pb={4}
        >
          {!Boolean(results.length) && (
            <Text>No tenemos suficiente información para recomendarte. </Text>
          )}
          {results.map((result) => {
            const isMovie = result.media_type === "movie";
            return (
              <RecommendationItem
                {...result}
                key={result.id}
                isMovie={isMovie}
              />
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

const RecommendationItem = ({
  id,
  backdrop_path,
  title,
  isMovie,
  release_date,
  name,
  first_air_date,
}) => {
  const navigate = useNavigate();
  const image = `${api.links.images.backdrop}${backdrop_path}`;
  const path = isMovie ? "/movie" : "/tv";
  return (
    <Stack direction={"column"}>
      <Box
        width={250}
        height={141}
        rounded={"lg"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => navigate(`${path}/${id}`)}
        position={"relative"}
        className={"meta-hover"}
      >
        <Image
          src={image}
          height={"100%"}
          width={"100%"}
          objectFit={"cover"}
          rounded={"lg"}
          cursor={"pointer"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
            currentTarget.style.width = "50px";
            currentTarget.style.height = "50px";
          }}
        />
        <Box className="meta">
          <Box
            as="span"
            display={"inline-flex"}
            alignItems={"center"}
            marginLeft={2}
          >
            <Image
              src={
                "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-46-calendar-3e0931dfeba8f62c51e81dfa4364a6d836f3a03aaf739a51d0846902ee367645.svg"
              }
              width={5}
              height={5}
            ></Image>
            <Text marginLeft={1}>
              {isMovie ? release_date : first_air_date}
            </Text>
          </Box>
        </Box>
      </Box>
      <Text>{isMovie ? title : name}</Text>
    </Stack>
  );
};
