/**
 * @vitest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import { AsyncComponent } from "./AsyncComponent";

it("should render loading state", async () => {
  render(<AsyncComponent />);

  expect(screen.getByText("Loading...")).toBeDefined();

  expect(await screen.findByText("Hello")).toBeDefined();
});
