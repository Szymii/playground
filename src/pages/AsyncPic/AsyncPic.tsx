import { Container, Heading, Image } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

interface Picture {
  download_url: string;
}

export const picLoader = async () => {
  return fetch(
    `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/info`
  );
};

export const AsyncPic = () => {
  const { download_url } = useLoaderData() as Picture;

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
      />
    </Container>
  );
};
