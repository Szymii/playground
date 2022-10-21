import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { useCats } from "../../modules/cats";
import { useCustomModalStore } from "../CustomModal/CustomModal";

interface IProps {
  heading: string;
  category: string;
}

export const CatsList = ({ heading, category }: IProps) => {
  const { onOpen, setModalData } = useCustomModalStore();
  const cats = useCats(category);

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
