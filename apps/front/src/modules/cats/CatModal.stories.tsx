import { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";

import { CatModal, useCatModal } from "./CatModal";

export default {
  component: CatModal,
} as Meta;

export const Default: StoryObj<typeof CatModal> = {
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
