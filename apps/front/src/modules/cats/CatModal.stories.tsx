import { Button } from "@chakra-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";

import { CatModal, useCatModal } from "./CatModal";

const meta = {
  component: CatModal,
} satisfies Meta<typeof CatModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { onOpen } = useCatModal();
    useEffect(() => {
      useCatModal.setState({
        modalData: {
          id: "dPKnpfpGVMNgo0v1",
        },
      });
    }, []);

    return (
      <>
        <Button onClick={onOpen}>Show Modal</Button>
        <CatModal />
      </>
    );
  },
};
