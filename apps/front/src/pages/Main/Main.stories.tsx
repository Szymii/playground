import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { within } from "@storybook/test";
import { withRouter } from "helpers";
import { IRegistrationForm, useUserDataStore } from "modules/users";
import { useEffect } from "react";

import { Main } from "./Main";

const meta = {
  component: Main,
  decorators: [withRouter()],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    useEffect(() => {
      useUserDataStore.setState({
        userData: {} as IRegistrationForm,
      });
    }, []);
    return <Main />;
  },
  play: async ({ canvasElement }) => {
    const { queryByText } = within(canvasElement);

    expect(queryByText("Profile")).toBeNull();
  },
};

export const WithUserProfile: Story = {
  render: () => {
    useEffect(() => {
      useUserDataStore.setState({
        userData: {
          firstName: "Test",
        } as IRegistrationForm,
      });
    }, []);
    return <Main />;
  },
  play: async ({ canvasElement }) => {
    const { findAllByText } = within(canvasElement);

    const profile = await findAllByText("Profile");

    // mobile and desktop nav
    expect(profile.length).toBe(2);
  },
};
