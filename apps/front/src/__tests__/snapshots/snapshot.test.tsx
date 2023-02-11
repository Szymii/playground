/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TestComponent } from "./TestComponent";

describe("testing theme toggler", () => {
  it("should match snapshot for light mode", async () => {
    const view = render(<TestComponent />);

    expect(view).toMatchSnapshot();
  });

  it("should match snapshot for dark mode", async () => {
    const view = render(<TestComponent />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    expect(view).toMatchSnapshot();
  });
});
