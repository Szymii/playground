import { Box, Flex, HStack, MenuItem, Text, VStack } from "@chakra-ui/react";

interface IProps {
  title: string;
  description: string;
}

export const Action = ({ title, description }: IProps) => {
  return (
    <Box className="stacked-action-item" data-group>
      <MenuItem rounded="md" p="4">
        <HStack spacing="6">
          <Flex
            w="44px"
            h="44px"
            rounded="md"
            alignItems="center"
            justifyContent="center"
          />
          <VStack align="stretch" spacing="1">
            <Text fontWeight="semibold" fontSize="sm">
              {title}
            </Text>
            <Text>{description}</Text>
          </VStack>
        </HStack>
      </MenuItem>
    </Box>
  );
};
