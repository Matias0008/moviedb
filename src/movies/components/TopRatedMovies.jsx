import { useCallback, useState } from "react";

import { api } from "@src/api";
import { useMovies } from "@src/hooks/useMovies";
import { MovieLayout } from "./MovieLayout";
import { Spinner, Stack } from "@chakra-ui/react";

export const TopRatedMovies = () => {
  const [numPage, setNumPage] = useState(1);
  const url = api.links.requests["TopRatedPeliculasWithNumPage"](numPage);
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
      title={"Películas mejor valoradas"}
      setNumPage={setNumPage}
    />
  );
};
