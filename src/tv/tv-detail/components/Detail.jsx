import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";

export const Detail = ({
  name,
  tagline,
  overview,
  crew,
  year,
  genres,
  episode_run_time,
}) => {
  let runtime = episode_run_time;
  let genresList = Object.values(genres).map((genre) => genre.name);
  genresList = genresList.join(", ");

  if (episode_run_time.length > 1) {
    runtime = Math.min(...episode_run_time);
  }

  let duration = (runtime / 60).toFixed(2).split(".");
  let getMinutes = Math.round(Number(`0.${duration[1]}`) * 60);
  let hours = duration[0] != "0" ? `${duration[0]}h` : "";
  let minutes = getMinutes != "0" ? `${getMinutes}m` : "";
  let formatDuration = `${hours}${minutes}`;
  return (
    <>
      <Box mb={3}>
        <Text
          as={"h1"}
          fontSize={"2.3rem"}
          fontWeight={"bold"}
          color={"white"}
          lineHeight={{ base: 1.2, lg: 1.2 }}
          mb={{ base: 4, lg: 0 }}
          textAlign={{ base: "center", lg: "start" }}
        >
          {name} ({year})
        </Text>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justify={{ base: "center", lg: "start" }}
          gap={1}
          color={"white"}
          divider={<StackDivider />}
          textAlign={{ base: "center", lg: "start" }}
        >
          <Text>{genresList}</Text>
          {formatDuration && <Text>{formatDuration}</Text>}
        </Stack>
      </Box>

      <Box>
        <Text
          color={"white"}
          fontStyle={"italic"}
          fontSize={"1.05rem"}
          opacity={"0.7"}
        >
          {tagline}
        </Text>
        <Text
          as={"h2"}
          color="white"
          fontSize={"1.3rem"}
          fontWeight="bold"
          mb={1}
        >
          Vista general
        </Text>
        <Text color={"white"} fontSize={"1.05rem"}>
          {overview}
        </Text>
      </Box>

      <Stack
        direction={"row"}
        pt={3}
        flexWrap={"wrap"}
        gap={{ base: 12, lg: 0 }}
      >
        {crew.map(({ id, name }) => {
          return <CrewItem name={name} key={id} />;
        })}
      </Stack>
    </>
  );
};

const CrewItem = ({ name }) => {
  return (
    <>
      <Box w={{ lg: "33%" }}>
        <Text as={"h3"} fontSize={"1.03rem"} color="white" fontWeight={"bold"}>
          {name}
        </Text>
        <Text color={"white"} fontSize={"0.9rem"}>
          Creador
        </Text>
      </Box>
    </>
  );
};
