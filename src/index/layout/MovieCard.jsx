/* Este es un componente el cual renderiza las cards que se muestran en el indice de nuestra aplicacion, la cual contiene informacion como el titulo, puntuacion, imagen y fecha de lanzamiento */

import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { Box, Flex, Skeleton, Stack, Text } from "@chakra-ui/react";

export const MovieCard = ({ type, url }) => {
  const { data, isLoading } = useFetch(url);
  const { results } = data;

  if (isLoading) {
    return (
      <Stack
        direction={"row"}
        width={"100%"}
        overflowX={"scroll"}
        overflowY={"hidden"}
        gap={4}
        height={"355px"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return <LoadingItem key={item} />;
        })}
      </Stack>
    );
  }

  return (
    <Stack
      direction={"row"}
      width={"100%"}
      overflowX={"scroll"}
      overflowY={"hidden"}
      gap={4}
      height={"355px"}
    >
      {results.map((result, i) => {
        const image = `https://image.tmdb.org/t/p/w500${result.poster_path}`;
        return (
          <MovieItem
            image={image}
            result={result}
            key={i}
            type={type || result.media_type}
          />
        );
      })}
    </Stack>
  );
};

const MovieItem = ({ type, result, image }) => {
  const navigate = useNavigate();

  return (
    <Flex
      direction={"column"}
      pb={6}
      gap={2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 2.5 }}
    >
      <Box
        width={"150px"}
        height={"225px"}
        className="movie-box"
        rating={result.vote_average.toFixed(1)}
        cursor={"pointer"}
        onClick={() => navigate(`${type}/${result.id}`)}
      >
        <Box as="img" src={image} rounded={"lg"} height={"100%"}></Box>
      </Box>
      <Box>
        <Text fontWeight={"bold"} fontSize={"15px"}>
          {result.name || result.title}
        </Text>
        <Text fontSize={"15px"} fontWeight={"400"} color={"gray"}>
          {result.first_air_date || result.release_date}
        </Text>
      </Box>
    </Flex>
  );
};

export const LoadingItem = () => {
  return (
    <Stack direction={"column"} pb={6} gap={2}>
      <Skeleton height="225px" width={"150px"} />
      <Skeleton width={"135px"} height={"16px"} />
      <Skeleton width={"100px"} height={"16px"} mb={8} />
    </Stack>
  );
};
