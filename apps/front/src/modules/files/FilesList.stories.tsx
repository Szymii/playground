import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import dayjs from "dayjs";

import { FilesList } from "./FilesList";
import { withFiles } from "./FilesProvider";

export default {
  component: FilesList,
  decorators: [withFiles()],
} as Meta;

const FILE_NAME = "File one.pdf";
const CREATE_DATE = dayjs().format("YYYY-MM-DD HH:mm");

export const Default: StoryObj<typeof FilesList> = {
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
