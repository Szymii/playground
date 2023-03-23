import { ChakraProvider } from "@chakra-ui/react";
import { Preview } from "@storybook/react";
import { theme } from "@szymii/ui";
import { initialize, mswDecorator } from "msw-storybook-addon";
import React from "react";

import { isTestRunner } from "../src/helpers";

initialize();

const withSkippableTests = (StoryFn, { parameters }) => {
  if (parameters.test?.skip && isTestRunner()) {
    return () => {};
  }

  return StoryFn();
};

const withChakra = (StoryFn) => {
  return React.createElement(ChakraProvider, { children: StoryFn(), theme });
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [mswDecorator, withSkippableTests, withChakra],
};

export default preview;
