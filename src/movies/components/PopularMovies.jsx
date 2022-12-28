import { useCallback, useEffect, useState } from "react";

import { api } from "@src/api";
import { useMovies } from "@src/hooks/useMovies";
import { MovieLayout } from "./MovieLayout";
import { Spinner, Stack } from "@chakra-ui/react";

export const PopularMovies = () => {
  const [numPage, setNumPage] = useState(1);
  const sortBy = "popularity.desc";
  const url = api.links.requests["getMostPopularMovies"](numPage, sortBy);
  const useMovieMemoized = useCallback(() => useMovies(url), [numPage]);
  const { results, isLoading } = useMovieMemoized();

  if (isLoading && numPage === 1) {
    return (
      <Stack h="100vh" justify={"center"} align="center">
        <Spinner />
      </Stack>
    );
  }

  return (
    <MovieLayout
      results={results}
      title={"Películas populares"}
      setNumPage={setNumPage}
    />
  );
};
