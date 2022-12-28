import { Box, Image, Link, Stack, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Stack
        h="300px"
        w="100%"
        bg="primary"
        justify="center"
        align="center"
        direction={"row"}
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          flexDirection={{ base: "column", sm: "row" }}
          rowGap={6}
          justifyContent={"center"}
          flexWrap="wrap"
          textAlign={{ base: "center", sm: "start" }}
          alignItems={"center"}
        >
          <Box
            h="100"
            w={{ base: 100, md: 150, lg: 200 }}
            display={{ base: "block", sm: "block" }}
          >
            <Image
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              h="100%"
              w="100%"
            />
          </Box>
          <Stack color={"white"}>
            <Stack>
              <Box>
                <Text
                  fontWeight={"bold"}
                  textTransform="uppercase"
                  fontSize={"1.2rem"}
                >
                  lo básico
                </Text>
              </Box>
              <Stack fontWeight={"500"} margin={"0 !important"}>
                <Link href="https://www.themoviedb.org/about" target="_blank">
                  Sobre TMDB
                </Link>
                <Link
                  href="https://www.themoviedb.org/documentation/api"
                  margin={"0 !important"}
                  target="_blank"
                >
                  API
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <Box
            w={"100%"}
            color={"white"}
            mb={{ base: 2, sm: 0 }}
            textAlign="center"
          >
            <Text>
              Creado por{" "}
              <Link
                style={{ color: "red" }}
                href="https://www.matiasdelgado.com.ar/"
                target={"_blank"}
              >
                Matias Delgado
              </Link>
            </Text>
          </Box>
        </Box>
      </Stack>
    </>
  );
};
