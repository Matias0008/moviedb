import { Stack, StackDivider, Text } from "@chakra-ui/react";
import { CastItem } from "./CastItem";
import { Recommendation } from "./Recommendation";

export const Cast = ({ cast, type, movieId, children }) => {
  const castSliced = cast.slice(0, 9);
  return (
    <>
      <Stack
        width={{ base: "100%", lg: "75%" }}
        flex={{ md: 1 }}
        justify={"space-between"}
        className="cast-item"
        divider={<StackDivider />}
      >
        <Stack
          direction={"row"}
          overflowX={"scroll"}
          overflowY={"hidden"}
          gap={2}
          pb={8}
          mb={4}
        >
          {castSliced.map((item, i) => {
            return <CastItem {...item} key={i} />;
          })}
        </Stack>
        {children}
        <Recommendation id={movieId} type={type} />
      </Stack>
    </>
  );
};
