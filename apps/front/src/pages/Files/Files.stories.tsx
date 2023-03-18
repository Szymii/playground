import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { withQueryClient } from "helpers";
import { files } from "mocks/handlers";

import { Files } from "./Files";

export default {
  component: Files,
  decorators: [withQueryClient()],
  parameters: {
    msw: {
      handlers: [files],
    },
  },
} as Meta;

export const Default: StoryObj<typeof Files> = {};

export const Interactive: StoryObj<typeof Files> = {
  play: async ({ canvasElement }) => {
    const { getByText, findByText, getAllByLabelText } = within(canvasElement);

    expect(await findByText("Test_file_one.pdf")).toBeInTheDocument();

    const menuButton = getAllByLabelText("Options")[0];
    userEvent.click(menuButton);

    expect(getByText("Download file")).toBeInTheDocument();
  },
};
