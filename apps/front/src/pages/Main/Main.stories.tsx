import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { IRegistrationForm, useUserDataStore } from "modules/users";
import { useEffect } from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { Main } from "./Main";

export default {
  component: Main,
  decorators: [],
} as Meta;

const router = createMemoryRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export const Default: StoryObj<typeof Main> = {
  render: () => {
    useEffect(() => {
      useUserDataStore.setState({
        userData: {} as IRegistrationForm,
      });
    }, []);
    return <RouterProvider router={router} />;
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
    return <RouterProvider router={router} />;
  },
  play: async ({ canvasElement }) => {
    const { getAllByText } = within(canvasElement);

    const profile = getAllByText("Profile");

    // mobile and desktop nav
    expect(profile.length).toBe(2);
  },
};
