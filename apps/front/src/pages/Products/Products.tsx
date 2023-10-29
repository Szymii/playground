import { Box, Container, Flex, Image, Input } from "@chakra-ui/react";
import { debounce } from "lodash";
import { useProductsQuery } from "modules/products";
import { useState } from "react";

export const Products = () => {
  const [category, setCategory] = useState("");

  const setCatEgory = debounce((value) => setCategory(value), 2000);

  const { data: cats } = useProductsQuery(category);

  return (
    <Container mt={5}>
      <Input onChange={({ target }) => setCatEgory(target.value)} />
      <Flex gap="1em" mt={8}>
        {cats?.map(({ id }) => (
          <Box key={id}>
            <Image
              src={`https://cataas.com/cat/${id}`}
              boxSize="140px"
              objectFit="cover"
              borderRadius="15px"
            />
          </Box>
        ))}
      </Flex>
    </Container>
  );
};
