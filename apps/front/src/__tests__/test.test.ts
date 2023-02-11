import { mdiFileOutline, mdiFilePngBox } from "@mdi/js";
import { getIconByExtension } from "helpers";
import { expect, it } from "vitest";

it("should return correct icon", () => {
  const jpg = getIconByExtension("jpg");
  expect(jpg).toBe(mdiFilePngBox);

  const defaultValue = getIconByExtension("asdf");
  expect(defaultValue).toBe(mdiFileOutline);
});
