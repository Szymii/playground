/**
 * @vitest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { v4 } from "uuid";
import { expect, it, vi } from "vitest";

import { CatsList } from "./CatsList";

const catId = v4();

vi.mock("./useCatsQuery", () => {
  return {
    useCatsQuery: vi.fn(() => [
      {
        id: catId,
      },
    ]),
  };
});

it("should render files list", async () => {
  render(<CatsList heading="Test" category="Test" />);

  expect(screen.getByText("Test")).toBeDefined();
});

it("should have image with proper link", async () => {
  render(<CatsList heading="Test" category="Test" />);
  const imageSrc = screen.getByRole("img").getAttribute("src");

  expect(imageSrc).toEqual(`https://cataas.com/cat/${catId}`);
});
