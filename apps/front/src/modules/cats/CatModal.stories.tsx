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
    useEffect(() => {
      useCatModal.setState({
        isOpen: true,
        onClose() {
          return;
        },
        modalData: {
          id: "dPKnpfpGVMNgo0v1",
        },
      });
    }, []);

    return <CatModal />;
  },
};
