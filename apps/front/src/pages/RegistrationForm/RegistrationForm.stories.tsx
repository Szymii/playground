import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { withQueryClient } from "helpers";

import { RegistrationForm } from "./RegistrationForm";

export default {
  title: "Pages/RegistrationForm",
  component: RegistrationForm,
  decorators: [withQueryClient()],
} as Meta<typeof RegistrationForm>;

export const Default = {
  render: () => <RegistrationForm />,
};

export const Interactive: StoryObj<typeof RegistrationForm> = {
  render: () => <RegistrationForm />,

  play: async ({ canvasElement }) => {
    const { getByText, getByRole, getByLabelText } = within(canvasElement);
    const emailInput = getByRole("textbox", { name: /Email address/i });
    const nameInput = getByRole("textbox", { name: /First Name/i });
    const passwordInput = getByLabelText("Password");
    const genderCheckbox = getByRole("radio", { name: /^Man/i });
    const workplaceSelect = getByRole("combobox");
    const policyCheckbox = getByText(
      "Accepting privacy policy and terms of use",
    );

    userEvent.type(emailInput, "szymimelzer9@gmail.com");
    userEvent.type(nameInput, "szymi");
    userEvent.type(passwordInput, "test123");
    userEvent.click(genderCheckbox);
    userEvent.selectOptions(workplaceSelect, "frontend");
    userEvent.click(policyCheckbox);
  },
};

export const Incorrect: StoryObj<typeof RegistrationForm> = {
  render: () => <RegistrationForm />,

  play: async ({ canvasElement }) => {
    const { getByText, findByText } = within(canvasElement);

    const policyCheckbox = getByText(
      "Accepting privacy policy and terms of use",
    );
    const submitBtn = getByText("Submit");
    userEvent.click(policyCheckbox);
    userEvent.click(submitBtn);

    expect(await findByText("Email is required.")).toBeInTheDocument();
    expect(await findByText("Invalid password.")).toBeInTheDocument();
  },
};
