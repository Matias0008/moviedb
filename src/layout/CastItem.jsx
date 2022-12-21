import { Box, Image, Stack, Text } from "@chakra-ui/react";

import { api } from "@src/api";

export const CastItem = ({ name, profile_path, character, roles }) => {
  const profile_img = `${api.links.images.poster}${profile_path}`;
  let episodesSum;
  let allCharacters;

  if (roles?.length > 1) {
    const newRoles = roles.slice(0, 2);
    episodesSum = newRoles.reduce(
      (partialSum, a) => partialSum + a.episode_count,
      0
    );
    allCharacters = Object.values(newRoles)
      .map((rol) => rol.character)
      .join(", ");
  }

  return (
    <Box
      overflow={"hidden"}
      minW={140}
      w={140}
      bg={"white"}
      boxShadow={"0 2px 8px rgb(0 0 0 / 10%)"}
      borderRadius={"10px 10px 0px 0px"}
    >
      <Image
        src={profile_img}
        width={"100%"}
        height={"175px"}
        objectFit={"cover"}
        borderRadius={"10px 10px 0px 0px"}
        loading={"lazy"}
      />
      <Box py={2} px={3}>
        <Text fontWeight={"bold"} fontSize={"0.95rem"}>
          {name}
        </Text>
        {character && <Text fontSize={"0.8rem"}>{character}</Text>}
        {roles?.length > 1 ? (
          <ShowRoles character={allCharacters} episodes={episodesSum} />
        ) : (
          roles?.map((rol) => {
            return (
              <ShowRoles
                character={rol.character}
                episodes={rol.episode_count}
                key={rol.credit_id}
              />
            );
          })
        )}
      </Box>
    </Box>
  );
};

export const ShowRoles = ({ character, episodes }) => {
  return (
    <>
      <Text fontSize={"0.8rem"}>{character}</Text>
      <Text fontSize={"0.8rem"} opacity={0.6}>
        {episodes} episodios
      </Text>
    </>
  );
};
