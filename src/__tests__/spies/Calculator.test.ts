import { describe, expect, it, vi } from "vitest";

import { Calculator } from "./Calculator";
import { useCalculationMethods } from "./useCalculationMethods";

const RANDOM_NUMBER = Math.floor(Math.random() * 10); // from 0 to 9

describe("learning how to use spies", () => {
  it("should call only addition method", () => {
    const methods = useCalculationMethods();
    const additionSpy = vi.spyOn(methods, "addition");
    const subtractionSpy = vi.spyOn(methods, "subtraction");

    const calculator = new Calculator(methods);

    calculator.add(1, 1);

    expect(additionSpy).toBeCalled();
    expect(subtractionSpy).not.toBeCalled();
  });

  it("should be called correct amount of times", () => {
    const methods = useCalculationMethods();
    const subtractionSpy = vi.spyOn(methods, "subtraction");

    const calculator = new Calculator(methods);

    for (let i: number = RANDOM_NUMBER; i > 0; i--) {
      calculator.subtract(1, 1);
    }

    expect(subtractionSpy).toBeCalledTimes(RANDOM_NUMBER);
  });

  it("should throw error", () => {
    const methods = useCalculationMethods();

    const calculator = new Calculator(methods);

    expect(() => calculator.divide(2, 0)).toThrowError("incorrect argument");
  });
});
