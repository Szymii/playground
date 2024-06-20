import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { userEvent, within } from "@storybook/test";
import { withQueryClient } from "helpers";

import { RegistrationForm } from "./RegistrationForm";

const meta = {
  component: RegistrationForm,
  decorators: [withQueryClient()],
} satisfies Meta<typeof RegistrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
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

export const Incorrect: Story = {
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
