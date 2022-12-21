import { Box, Stack, Text } from "@chakra-ui/react";

export const Facts = ({
  original_title,
  status,
  original_language,
  budget,
  revenue,
  keywords,
  type,
}) => {
  const map = {
    en: "Ingles",
    Released: "Estrenada",
    ja: "Japones",
  };

  const budgetFormatted = budget?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const revenueFormatted = revenue?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const newKeywords = keywords.slice(0, 10);

  return (
    <Box
      mt={{ base: 8, lg: 0 }}
      maxW={{ md: 200 }}
      w={{ base: "100%", md: "unset" }}
    >
      <Stack
        direction={{ base: "row", md: "column" }}
        gap={{ base: 3, lg: 4 }}
        flexWrap={"wrap"}
        justify={{ base: "space-between", lg: "start" }}
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
        <Box className="movie-fact-card">
          <Text fontWeight={"bold"} lineHeight={1.1}>
            Titulo original
          </Text>
          <Text>{original_title}</Text>
        </Box>
        <Box className="movie-fact-card">
          <Text
            fontWeight={"bold"}
            lineHeight={1.1}
            textAlign={{ base: "end", md: "start" }}
          >
            Estado
          </Text>
          <Text>{map[status]}</Text>
        </Box>
        <Box className="movie-fact-card">
          <Text fontWeight={"bold"} lineHeight={1.1}>
            Idioma original
          </Text>
          <Text>{map[original_language]}</Text>
        </Box>
        <Box className="movie-fact-card">
          <Text
            fontWeight={"bold"}
            lineHeight={1.1}
            textAlign={{ base: "end", md: "start" }}
          >
            Presupuesto
          </Text>
          <Text>{budgetFormatted != "$0.00" ? budgetFormatted : "-"}</Text>
        </Box>
        <Box className="movie-fact-card">
          <Text fontWeight={"bold"} lineHeight={1.1}>
            Ingresos
          </Text>
          <Text>{revenueFormatted != "$0.00" ? revenueFormatted : "-"}</Text>
        </Box>
      </Stack>
      <Box as="section" mt={8} width={{ base: "100%", md: 200 }}>
        <Text as="h4" fontWeight={"bold"} fontSize={"1.1rem"} mb={2}>
          Palabras clave
        </Text>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          gap={1}
        >
          {newKeywords.map((keyword) => {
            return (
              <Text
                background={"rgba(0,0,0,0.1)"}
                borderRadius={4}
                padding={"4px 10px"}
                color={"#000"}
                border={"1px solid #d7d7d7"}
                fontSize={"13px"}
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
