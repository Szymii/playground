import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export const EmptyAction = () => {
  return (
    <Box rounded="md" p="4" className="empty-action-item">
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
            Pusto
          </Text>
          <Text>Brak akcji do wykonania</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
