import { Container, Heading, Image } from "@chakra-ui/react";

import { usePicQuery } from "./usePicQuery";

export const AsyncPic = () => {
  const { download_url } = usePicQuery();

  return (
    <Container p="2em">
      <Heading textAlign="center" mb="1em">
        Your random Picture
      </Heading>
      <Image
        src={download_url}
        boxSize="600px"
        objectFit="cover"
        borderRadius="15px"
        alt="random photo - no idea whats on them"
      />
    </Container>
  );
};
