import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { api } from "@src/api";

export const LastSeason = ({ movieName, lastSeason, inProduction }) => {
  console.log(lastSeason);
  const airDate = lastSeason.air_date;

  let date = new Date(
    airDate.slice(0, 4),
    airDate.slice(5, 7) - 1,
    airDate.slice(8, 10)
  );

  // Damos un formato de string a nuestra fecha
  date = date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const img = `${api.links.images.poster}${lastSeason.poster_path}`;
  return (
    <Box pt={4} pb={4}>
      <Text as="h3" fontSize={"1.4rem"} fontWeight={"bold"} mb={3}>
        {inProduction ? "Temporada actual" : "Ultima temporada"}
      </Text>
      <Stack
        border={"1px solid rgba(227,227,227, 1)"}
        rounded={{ base: "unset", md: "lg" }}
        direction={{ base: "column", md: "row" }}
        gap={2}
        boxShadow={"0 2px 8px rgb(0 0 0 / 10%)"}
      >
        <Box
          width={130}
          height={{ base: "190", md: "unset" }}
          borderTopLeftRadius={"lg"}
          borderBottomLeftRadius={"lg"}
          flexShrink={0}
          display={{ base: "none", md: "block" }}
        >
          <Image
            width={"100%"}
            height={"100%"}
            src={img}
            borderTopLeftRadius={"lg"}
            borderBottomLeftRadius={"lg"}
            objectFit={"cover"}
          />
        </Box>
        <Box mt={"0px !important"}>
          <Stack
            direction={"column"}
            width={"100%"}
            height={"100%"}
            justify={"center"}
            gap={1}
            p={3}
          >
            <Box>
              <Text as={"h2"} fontSize={"1.5rem"} fontWeight={"bold"}>
                {lastSeason.name}
              </Text>
              <Text as={"h4"} fontSize={"0.92rem"} fontWeight={"bold"}>
                {`${lastSeason.air_date.slice(0, 4)} | ${
                  lastSeason.episode_count
                } episodios`}
              </Text>
            </Box>
            <Text pb={3}>
              {lastSeason.overview
                ? lastSeason.overview
                : `La ${lastSeason.name} de ${movieName} se estrenó el ${date}`}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
