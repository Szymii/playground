import { Box, Image } from "@chakra-ui/react";
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
} from "components/ui/dialog";
import { createModalStore } from "helpers";

export const useCatModal = createModalStore<{ id: string }>();

export const CatModal = () => {
  const { isOpen, onClose, modalData } = useCatModal();

  return (
    <DialogRoot open={isOpen}>
      <DialogBackdrop />
      <DialogContent>
        <DialogHeader>Modal Title</DialogHeader>
        <DialogCloseTrigger onClick={onClose} />
        <DialogBody pb="5">
          <Box>
            <Image
              src={`https://cataas.com/cat/${modalData.id}`}
              objectFit="cover"
              w="100%"
              maxH="400px"
              borderRadius="15px"
            />
          </Box>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};
