import { Container, Heading, Image } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

interface Picture {
  download_url: string;
}

export const picLoader = async () => {
  const res = await fetch(
    `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/info`,
  );

  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }

  return res.json();
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
        alt="random photo - no idea whats on them"
      />
    </Container>
  );
};
