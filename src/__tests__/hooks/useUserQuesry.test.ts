/**
 * @vitest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import { v4 as uuidv4 } from "uuid";
import { expect, it } from "vitest";

import { useUserQuery } from "./useUserQuery";

it("should handle async hook", async () => {
  const id = uuidv4();
  const { result, waitForNextUpdate } = renderHook(() => useUserQuery(id));
  await waitForNextUpdate();

  expect(result.current).toEqual({
    name: "Szymon",
    id,
    age: 23,
  });
});
