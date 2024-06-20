import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { userEvent, within } from "@storybook/test";
import dayjs from "dayjs";

import { FilesList } from "./FilesList";
import { withFiles } from "./FilesProvider";

const meta = {
  component: FilesList,
  decorators: [withFiles()],
} satisfies Meta<typeof FilesList>;

export default meta;
type Story = StoryObj<typeof meta>;

const FILE_NAME = "File one.pdf";
const CREATE_DATE = dayjs().format("YYYY-MM-DD HH:mm");

export const Default: Story = {
  decorators: [
    withFiles([
      {
        id: "l3orpzhugbvef291sd54yin08mk7x6jt",
        fileName: FILE_NAME,
        fileExtension: "pdf",
        createdAt: CREATE_DATE,
        editedAt: null,
        editionReason: null,
        inactivatedAt: null,
        inactivationReason: null,
        deletedAt: null,
        deletionReason: null,
      },
    ]),
  ],
};

export const Edited: StoryObj<typeof FilesList> = {
  parameters: {
    a11y: { disable: true },
  },
  decorators: [
    withFiles([
      {
        id: "l3orpzhugbvef291sd54yin08mk7x6jt",
        fileName: FILE_NAME,
        fileExtension: "pdf",
        createdAt: CREATE_DATE,
        editedAt: "2022-09-30 15:15",
        editionReason: "Typo",
        inactivatedAt: null,
        inactivationReason: null,
        deletedAt: null,
        deletionReason: null,
      },
    ]),
  ],

  play: async ({ canvasElement }) => {
    const { findByText, getAllByLabelText, getByText } = within(canvasElement);

    expect(await findByText(FILE_NAME)).toBeInTheDocument();
    expect(await findByText(`Created at: ${CREATE_DATE}`)).toBeInTheDocument();

    const menuButton = getAllByLabelText("Options")[0];
    userEvent.click(menuButton);

    expect(getByText("Download file")).toBeInTheDocument();
    expect(getByText("Show edition reason")).toBeInTheDocument();
  },
};

export const Deleted: StoryObj<typeof FilesList> = {
  parameters: {
    a11y: { disable: true },
  },
  decorators: [
    withFiles([
      {
        id: "l3orpzhugbvef291sd54yin08mk7x6jt",
        fileName: FILE_NAME,
        fileExtension: "pdf",
        createdAt: CREATE_DATE,
        editedAt: "2022-09-30 15:15",
        editionReason: null,
        inactivatedAt: null,
        inactivationReason: null,
        deletedAt: "2022-09-30 15:16",
        deletionReason: "Deprecated",
      },
    ]),
  ],

  play: async ({ canvasElement }) => {
    const { getAllByLabelText, getByText, queryByText } = within(canvasElement);

    const menuButton = getAllByLabelText("Options")[0];
    userEvent.click(menuButton);

    expect(queryByText("Download file")).not.toBeInTheDocument();
    expect(getByText("Show edition reason")).toBeInTheDocument();
    expect(getByText("Show deletion reason")).toBeInTheDocument();
  },
};
