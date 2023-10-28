import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { useImagesQuery } from "pages/Loaders";

export const LoadedCats = () => {
  const cats = useImagesQuery();
  const sadCats = useImagesQuery("sad");

  return (
    <>
      <Heading>Base</Heading>
      <Flex gap="1em">
        {cats?.map(({ id }) => (
          <Box key={id}>
            <Image
              src={`https://cataas.com/cat/${id}`}
              boxSize="140px"
              objectFit="cover"
              borderRadius="15px"
              cursor="pointer"
            />
          </Box>
        ))}
      </Flex>
      <Heading>Sad</Heading>
      <Flex gap="1em">
        {sadCats?.map(({ id }) => (
          <Box key={id}>
            <Image
              src={`https://cataas.com/cat/${id}`}
              boxSize="140px"
              objectFit="cover"
              borderRadius="15px"
              cursor="pointer"
            />
          </Box>
        ))}
      </Flex>
    </>
  );
};
