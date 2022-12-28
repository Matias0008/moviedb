import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { api } from "@src/api";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({
  type = "movie",
  id,
  poster,
  name,
  date,
  overview,
}) => {
  const navigate = useNavigate();
  const posterImage = `${api.links.images.poster}${poster}`;
  let newOverview = overview.split(" ").slice(0, 10).join(" ") + " ...";
  let newDate = new Date(date);

  newDate = newDate
    .toLocaleDateString("es-AR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .split(" ");
  newDate = `${newDate[0]} ${newDate[2]} ${newDate[4]}`;

  return (
    <GridItem
      w="100%"
      // h={{  md: "100%" }}
      boxShadow={"0 2px 8px rgb(0 0 0 / 10%)"}
      border={"1px solid rgba(227,227,227, 1);"}
    >
      <Stack
        h="100%"
        w="100%"
        direction={{ base: "row", sm: "column" }}
        onClick={() => navigate(`/${type}/${id}`)}
        cursor={"pointer"}
      >
        <Image
          src={posterImage}
          objectFit={"cover"}
          w={{ base: 94, sm: "100%" }}
          h={{ xl: 300 }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
          }}
        />
        <Stack p={2} pb={3} pt={3}>
          {/* Wrapper para el titulo y la fecha */}
          <Stack>
            <Text fontWeight={"bold"}>
              {name}
              <Text
                opacity={0.7}
                as="span"
                display={"block"}
                fontWeight={"normal"}
              >
                {newDate}
              </Text>
            </Text>
          </Stack>
          <Stack w="100%" h="100%" justify={"center"}>
            <Text
              textOverflow={"ellipsis"}
              overflow="hidden"
              display={{ sm: "none", md: "none" }}
              wordBreak={"break-all"}
              fontSize={"13px"}
            >
              {newOverview}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </GridItem>
  );
};
