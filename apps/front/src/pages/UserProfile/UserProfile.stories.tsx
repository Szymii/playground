import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { useUserDataStore } from "modules/users";
import { useEffect } from "react";
import { GenderEnum, IRegistrationForm, WorkplaceEnum } from "types";

import { UserProfile } from "./UserProfile";

export default { component: UserProfile } as Meta;

const USER_DATA = {
  emailAddress: "test@example.com",
  firstName: "Test",
  gender: GenderEnum.male,
  workplace: WorkplaceEnum.frontend,
} as IRegistrationForm;

export const Default: StoryObj<typeof UserProfile> = {
  render: () => {
    useEffect(() => {
      useUserDataStore.setState({
        userData: USER_DATA,
      });
    }, []);

    return <UserProfile />;
  },
  play: async ({ canvasElement }) => {
    const { getByTestId, getByLabelText, getByRole } = within(canvasElement);

    const userGreeting = getByTestId("user-greeting");
    const email = getByLabelText("Email address") as HTMLInputElement;
    const workplace = getByLabelText("Workplace") as HTMLInputElement;
    const genderCheckbox = getByRole("radio", {
      checked: true,
    }) as HTMLInputElement;

    expect(userGreeting.textContent).toBe(`Hi ${USER_DATA.firstName}`);
    expect(email.value).toBe(USER_DATA.emailAddress);
    expect(workplace.value).toBe(USER_DATA.workplace);
    expect(genderCheckbox.value).toBe(USER_DATA.gender);
  },
};
