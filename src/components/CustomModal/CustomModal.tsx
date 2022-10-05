import {
  Box,
  Image,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { createModalStore } from "./createModalStore";

export const useCustomModalStore = createModalStore<{ id: string }>();

export const CustomModal = () => {
  const { isOpen, onClose, modalData } = useCustomModalStore();
  const { id } = modalData;

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="5">
          <Box>
            <Image
              src={`https://cataas.com/cat/${id}`}
              objectFit="cover"
              w="100%"
              maxH="400px"
              borderRadius="15px"
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
