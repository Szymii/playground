import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { useSuspense } from "../../hooks";
import { useCustomModalStore } from "../CustomModal/CustomModal";

interface IProps {
  heading: string;
  category: string;
}

type Cat = Array<{ id: string }>;

export const CatsList = ({ heading, category }: IProps) => {
  const url = `https://cataas.com//api/cats?tags=${category}&skip=0&limit=3`;
  const { data: cats } = useSuspense<Cat>(`cat-${category}`, url);
  const { onOpen, setModalData } = useCustomModalStore();

  return (
    <>
      <Heading size="md" w="100%">
        {heading}
      </Heading>
      <Flex gap="1em">
        {cats?.map(({ id }) => (
          <Box key={id}>
            <Image
              src={`https://cataas.com/cat/${id}`}
              boxSize="140px"
              objectFit="cover"
              borderRadius="15px"
              cursor="pointer"
              onClick={() => {
                onOpen();
                setModalData({ id });
              }}
            />
          </Box>
        ))}
      </Flex>
    </>
  );
};
