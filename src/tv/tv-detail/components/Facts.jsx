import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { api } from "@src/api";

export const Facts = ({
  status,
  networks,
  type,
  original_name,
  original_language,
  keywords,
}) => {
  const newKeywords = keywords.slice(0, 15);
  const maps = {
    "Returning Series": "Volverá a emitirse",
    Scripted: "Con guion",
    en: "Inglés",
    ko: "Coreano",
    ja: "Japonés",
    Ended: "Finalizado",
  };

  return (
    <Box
      mt={{ base: 8, lg: 0 }}
      maxW={{ base: "100%", md: "150px" }}
      w={{ base: "100%" }}
    >
      <Text
        as={"h3"}
        fontWeight={"bold"}
        fontSize={"1.1rem"}
        mb={2}
        w={{ base: "100%", md: "unset" }}
      >
        Datos
      </Text>
      <Stack
        direction={"column"}
        gap={{ base: 3, lg: 4 }}
        flexWrap={"wrap"}
        justify={{ base: "space-between", lg: "start" }}
      >
        <Box className="movie-fact-card">
          <Text fontWeight={"bold"} lineHeight={1.1}>
            Titulo original
          </Text>
          <Text>{original_name}</Text>
        </Box>
        <Box className="movie-fact-card">
          <Text fontWeight={"bold"} lineHeight={1.1}>
            Estado
          </Text>
          <Text>{maps[status]}</Text>
        </Box>
        <Box className="movie-fact-card">
          <Text fontWeight={"bold"} lineHeight={1.1}>
            {networks.length > 1 ? "Canales" : "Canal"}
          </Text>
          {networks.map(({ id, name, logo_path }) => {
            return (
              <Image
                mt={2}
                src={`${api.links.images.poster}${logo_path}`}
                id={id}
                alt={name}
                width={{ base: 50, md: 100 }}
                objectFit={"cover"}
                key={id}
              />
            );
          })}
        </Box>
        <Box className="movie-fact-card">
          <Text fontWeight={"bold"} lineHeight={1.1}>
            Tipo
          </Text>
          <Text>{maps[type] || type}</Text>
        </Box>
        <Box className="movie-fact-card">
          <Text fontWeight={"bold"} lineHeight={1.1}>
            Idioma original
          </Text>
          <Text>{maps[original_language]}</Text>
        </Box>
      </Stack>
      <Box as="section" mt={8} width={{ base: "100%" }}>
        <Text as="h4" fontWeight={"bold"} fontSize={"1.1rem"} mb={2}>
          Palabras clave
        </Text>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          gap={1}
          maxW={{ base: "100%", md: 200 }}
          w={{ base: "100%" }}
        >
          {newKeywords.map((keyword) => {
            return (
              <Text
                background={"rgba(0,0,0,0.1)"}
                borderRadius={4}
                padding={"4px 10px"}
                color={"#000"}
                border={"1px solid #d7d7d7"}
                fontSize={"12.3px"}
                margin={"0 !important"}
                key={keyword.id}
              >
                {keyword.name}
              </Text>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};
