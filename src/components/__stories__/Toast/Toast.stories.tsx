import { ChakraProvider } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { theme } from "theme";
import { ToastExample } from "./ToastExample";
import { css, Global } from "@emotion/react";

export default {
  title: "Concept/Toast",
  component: ToastExample,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Global
          styles={css`
            .chakra-alert__title,
            .chakra-alert__desc {
              font-family: "Georgia, serif";
            }
          `}
        />
        <Story />
      </ChakraProvider>
    ),
  ],
} as ComponentMeta<typeof ToastExample>;

export const Default = () => {
  return (
    <>
      <ToastExample />
    </>
  );
};
