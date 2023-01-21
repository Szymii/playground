export const useCalculationMethods = () => {
  const addition = (a: number, b: number) => a + b;
  const subtraction = (a: number, b: number) => a - b;
  const multiplication = (a: number, b: number) => a * b;
  const division = (a: number, b: number) => {
    if (b === 0) {
      throw new Error("incorrect argument");
    }

    return a / b;
  };

  return {
    addition,
    subtraction,
    multiplication,
    division,
  };
};
