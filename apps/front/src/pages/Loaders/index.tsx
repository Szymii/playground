import {
  Box,
  Container,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

import { useImagesQuery } from "./useImagesQuery";

export const Loaders = () => {
  const navigate = useNavigate();

  const handleTabsChange = (index: number) => {
    if (index === 0) {
      navigate("sad");
    }

    if (index === 1) {
      navigate("more/fat");
    }
  };

  return (
    <Container>
      <Tabs isFitted variant="enclosed" isLazy onChange={handleTabsChange}>
        <TabList>
          <Tab>Sad</Tab>
          <Tab>Fat</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <BaseCats />
            <Outlet />
          </TabPanel>
          <TabPanel>
            <BaseCats />
            <Outlet />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

const BaseCats = () => {
  const cats = useImagesQuery();

  return (
    <Flex gap="1em" mb={10}>
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
  );
};

export { imagesLoader, useImagesQuery } from "./useImagesQuery";
