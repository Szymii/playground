import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { userEvent, within } from "@storybook/test";
import { withQueryClient } from "helpers";
import { files } from "mocks/handlers";

import { Files } from "./Files";

const meta = {
  component: Files,
  decorators: [withQueryClient()],
  parameters: {
    msw: {
      handlers: [files],
    },
  },
} satisfies Meta<typeof Files>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const { getByText, findByText, getAllByLabelText } = within(canvasElement);

    expect(await findByText("Test_file_one.pdf")).toBeInTheDocument();

    const menuButton = getAllByLabelText("Options")[0];
    userEvent.click(menuButton);

    expect(getByText("Download file")).toBeInTheDocument();
  },
};
