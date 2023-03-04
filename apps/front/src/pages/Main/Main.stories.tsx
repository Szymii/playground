import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { withRouter } from "helpers";
import { IRegistrationForm, useUserDataStore } from "modules/users";
import { useEffect } from "react";

import { Main } from "./Main";

export default {
  component: Main,
  decorators: [withRouter()],
} as Meta;

export const Default: StoryObj<typeof Main> = {
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

export const WithUserProfile: StoryObj<typeof Main> = {
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
