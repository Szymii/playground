import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { withQueryClient } from "helpers";
import { files } from "mocks/handlers";
import { mswMock } from "mocks/mswMock";

import { Files } from "./Files";

mswMock(files);

export default {
  title: "Pages/Files",
  component: Files,
  decorators: [withQueryClient()],
} as Meta<typeof Files>;

export const Default = {
  render: () => <Files />,
};

export const Interactive: StoryObj<typeof Files> = {
  render: () => <Files />,

  play: async ({ canvasElement }) => {
    const { getByText, findByText, getAllByLabelText } = within(canvasElement);

    expect(await findByText("Test_file_one.pdf")).toBeInTheDocument();

    const menuButton = await getAllByLabelText("Options")[0];
    userEvent.click(menuButton);

    expect(getByText("Download file")).toBeInTheDocument();
  },
};
