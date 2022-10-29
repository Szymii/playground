import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { CatModal, useCatModal } from "./CatModal";
import { useCatsQuery } from "./useCatsQuery";

interface IProps {
  heading: string;
  category: string;
}

export const CatsList = ({ heading, category }: IProps) => {
  const { onOpen, setModalData } = useCatModal();
  const cats = useCatsQuery(category);

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
      <CatModal />
    </>
  );
};
