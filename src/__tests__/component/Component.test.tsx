/**
 * @vitest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";

import { Component } from "./Component";
import { MockComponent } from "./Exported";

vi.mock("./Exported", async () => {
  const actual = await vi.importActual("./Exported");

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...actual,
    Exported: vi.fn(() => <MockComponent />),
    default: vi.fn(() => <MockComponent />),
  };
});

it("should render mocked components", async () => {
  render(<Component />);

  const matches = screen.getAllByText("Mocked");

  expect(matches.length).toBe(2);
});
