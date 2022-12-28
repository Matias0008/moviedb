import { GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { api } from "@src/api";
import { useNavigate } from "react-router-dom";

export const SearchLayout = ({
  id,
  poster_path,
  name,
  title,
  release_date,
  first_air_date,
  overview,
}) => {
  const navigate = useNavigate();
  const posterImage = `${api.links.images.poster}${poster_path}`;
  let newDate = new Date(release_date || first_air_date);
  newDate = newDate.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <GridItem
      w="100%"
      boxShadow={"0 2px 8px rgb(0 0 0 / 10%)"}
      border={"1px solid rgba(227,227,227, 1);"}
    >
      <Stack
        h="100%"
        w="100%"
        direction={"row"}
        onClick={() => navigate(`/movie/${id}`)}
        cursor={"pointer"}
      >
        <Image
          src={posterImage}
          objectFit={"cover"}
          w={100}
          h={140}
          flexShrink={0}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
          }}
        />
        <Stack p={2} pb={3} pt={3} maxW="95%">
          {/* Wrapper para el titulo y la fecha */}
          <Stack>
            <Text fontWeight={"bold"}>
              {name || title}
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
              wordBreak={"break-all"}
              fontSize={"13px"}
              maxH={"60px"}
            >
              {overview}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </GridItem>
  );
};
