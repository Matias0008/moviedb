import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";

export const Detail = ({
  title,
  tagline,
  overview,
  release_date,
  crew,
  year,
  genres,
  runtime,
}) => {
  let genresList = Object.values(genres).map((genre) => genre.name);
  genresList = genresList.join(", ");
  let duration = (runtime / 60).toFixed(2).split(".");
  let getMinutes = Math.round(Number(`0.${duration[1]}`) * 60);
  let formatDuration = `${duration[0]}h ${getMinutes}m`;
  let date = new Date(
    release_date.slice(0, 4),
    release_date.slice(5, 7) - 1,
    release_date.slice(8, 10)
  );
  date = date.toLocaleDateString("es-AR");

  return (
    <>
      <Box mb={3}>
        <Text
          as={"h1"}
          fontSize={"2.3rem"}
          fontWeight={"bold"}
          color={"white"}
          lineHeight={{ base: 1.2, lg: 1.2 }}
          mb={{ base: 4, lg: 0.5 }}
          textAlign={{ base: "center", lg: "start" }}
        >
          {title} ({year})
        </Text>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justify={{ base: "center", lg: "start" }}
          gap={1}
          color={"white"}
          divider={<StackDivider />}
        >
          <Text mt={"0 !important"} padding={0} fontSize={"1rem"}>
            {date}
          </Text>
          <Text>{formatDuration}</Text>
          <Text>{genresList}</Text>
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
        gap={{ base: 3, lg: 14 }}
        pt={3}
        flexWrap={"wrap"}
      >
        {crew.map(({ name, job }, i) => {
          return <CrewItem name={name} job={job} key={i} />;
        })}
      </Stack>
    </>
  );
};

const CrewItem = ({ name, job }) => {
  return (
    <>
      <Box>
        <Text as={"h3"} fontSize={"1.03rem"} color="white" fontWeight={"bold"}>
          {name}
        </Text>
        <Text color={"white"} fontSize={"0.9rem"}>
          {job}
        </Text>
      </Box>
    </>
  );
};
