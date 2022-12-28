import { useCallback, useState } from "react";
import { Spinner, Stack } from "@chakra-ui/react";

import { api } from "@src/api";
import { useMovies } from "@src/hooks/useMovies";
import { MovieLayout } from "@src/movies/components/MovieLayout";

export const PopularTv = () => {
  const [numPage, setNumPage] = useState(1);
  const url = api.links.requests["getPopularTv"](numPage);
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
      title={"Programas de televisión populares"}
      setNumPage={setNumPage}
      type="tv"
    />
  );
};
