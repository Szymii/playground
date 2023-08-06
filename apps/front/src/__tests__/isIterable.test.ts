import { describe, expect, test } from "vitest";

describe("check if an object is iterable", () => {
  // test("if function is iterable", () => {
  //   expect(isIterable(console.log)).toBe(false);
  // });

  test("if array is iterable", () => {
    expect(isIterable([])).toBe(true);
  });

  test("if object is iterable", () => {
    expect(isIterable({})).toBe(false);
  });

  test("if null is iterable", () => {
    expect(() => isIterable(null)).toThrowError("Value is null or undefined");
  });

  test("if number is iterable", () => {
    expect(isIterable(15)).toBe(false);
  });

  test("if string is iterable", () => {
    expect(isIterable("hello")).toBe(true);
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isIterable = (object: any) => {
  object = object ?? new Error("Value is null or undefined");

  if (object instanceof Error) throw object;

  return (
    !!object[Symbol.iterator] && typeof object[Symbol.iterator] === "function"
  );
};
