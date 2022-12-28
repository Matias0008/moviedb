import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { api } from "@src/api";
import { useFetch } from "@src/hooks/useFetch";

import { Container, Grid, Spinner, Stack, Text } from "@chakra-ui/react";
import { SearchLayout } from "./SearchLayout";

export const Search = () => {
  const location = useLocation();
  const { query = "" } = queryString.parse(location.search);
  const url = api.links.requests.search(query);

  const { data, isLoading } = useFetch(url);
  const { results } = data;

  if (isLoading) {
    return (
      <Stack h="100vh" justify={"center"} align="center">
        <Spinner />
      </Stack>
    );
  }
  document.title = `${query} | The Movie Database (TMDB)`;

  return (
    <Container
      maxW={"1200px"}
      px={{ base: 4, md: 8, lg: 8, xl: 4 }}
      py={6}
      minH="calc(100vh - 364px)"
    >
      {results.length > 0 ? (
        <Text fontSize={"1.2rem"} mb={4}>
          Resultados para{" "}
          <Text as={"span"} fontStyle={"italic"}>
            {query}
          </Text>
        </Text>
      ) : (
        <Text fontSize={"1.2rem"} mb={4}>
          No se encontraron resultados para{" "}
          <Text as={"span"} fontStyle={"italic"}>
            {query}
          </Text>
        </Text>
      )}

      <Stack
        direction={"column"}
        flexWrap={"wrap"}
        gap={4}
        justifyContent={"space-between"}
      >
        <Grid templateColumns={"repeat(1, 1fr)"} w="100%" gap={6}>
          {results?.map((result) => {
            return <SearchLayout {...result} key={result.id} />;
          })}
        </Grid>
      </Stack>
    </Container>
  );
};
