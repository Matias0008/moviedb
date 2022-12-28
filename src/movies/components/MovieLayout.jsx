import { Button, Container, Grid, Stack, Text } from "@chakra-ui/react";
import { MovieCard } from "../../layout/MovieCard";

export const MovieLayout = ({ type, title, results, setNumPage }) => {
  const cardsToShow = {
    base: "repeat(auto-fill, minmax(220px, 1fr))",
    md: "repeat(auto-fill, minmax(160px, 1fr))",
    lg: "repeat(auto-fill, minmax(160px, 1fr))",
    xl: "repeat(5, minmax(160px, 1fr))",
  };

  return (
    <Container maxW={"1200px"} px={{ base: 4, md: 8, lg: 8, xl: 4 }} py={6}>
      <Text as="h1" fontSize={"1.7rem"} fontWeight={"500"} mb={4}>
        {title}
      </Text>
      <Stack
        direction={"column"}
        flexWrap={"wrap"}
        gap={4}
        justifyContent={"space-between"}
      >
        <Grid templateColumns={cardsToShow} w="100%" gap={6}>
          {results?.map((result) => {
            return (
              <MovieCard
                name={result.title || result.name}
                date={result.release_date || result.first_air_date}
                poster={result.poster_path}
                overview={result.overview}
                id={result.id}
                key={result.id}
                type={type}
              />
            );
          })}
        </Grid>
      </Stack>
      <Button mt={8} onClick={() => setNumPage((prev) => prev + 1)} w="100%">
        Mostrar más
      </Button>
    </Container>
  );
};
