import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { isTestRunner } from "helpers";

import { UserAgent } from ".";

const meta = {
  component: UserAgent,
  parameters: {
    test: {
      skip: true,
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <p>
          <strong>isTestRunner:</strong> {isTestRunner().toString()}
        </p>
        <p>
          <strong>User agent:</strong> {window.navigator.userAgent}
        </p>
      </div>
    );
  },
  play: async () => {
    if (isTestRunner()) {
      expect(window.navigator.userAgent).toContain("StorybookTestRunner");
    }
  },
};
