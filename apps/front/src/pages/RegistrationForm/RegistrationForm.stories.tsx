import { expect } from "@storybook/jest";
import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RegistrationForm } from "./RegistrationForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default {
  title: "Pages/RegistrationForm",
  component: RegistrationForm,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta<typeof RegistrationForm>;

const Template: StoryFn<typeof RegistrationForm> = () => <RegistrationForm />;
export const Default = Template.bind({});

export const Interactive = Template.bind({});
Interactive.play = async ({ canvasElement }) => {
  const { getByText, getByRole, getByLabelText } = within(canvasElement);
  const emailInput = getByRole("textbox", { name: /Email address/i });
  const nameInput = getByRole("textbox", { name: /First Name/i });
  const passwordInput = getByLabelText("Password");
  const genderCheckbox = getByRole("radio", { name: /^Man/i });
  const workplaceSelect = getByRole("combobox");
  const policyCheckbox = getByText("Accepting privacy policy and terms of use");

  userEvent.type(emailInput, "szymimelzer9@gmail.com");
  userEvent.type(nameInput, "szymi");
  userEvent.type(passwordInput, "test123");
  userEvent.click(genderCheckbox);
  userEvent.selectOptions(workplaceSelect, "frontend");
  userEvent.click(policyCheckbox);
};

export const Incorrect = Template.bind({});
Incorrect.play = async ({ canvasElement }) => {
  const { getByText, findByText } = within(canvasElement);

  const policyCheckbox = getByText("Accepting privacy policy and terms of use");
  const submitBtn = getByText("Submit");
  userEvent.click(policyCheckbox);
  userEvent.click(submitBtn);

  expect(await findByText("Email is required.")).toBeInTheDocument();
  expect(await findByText("Invalid password.")).toBeInTheDocument();
};
