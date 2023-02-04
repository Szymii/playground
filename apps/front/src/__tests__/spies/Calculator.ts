interface IMethods {
  addition: (a: number, b: number) => number;
  subtraction: (a: number, b: number) => number;
  multiplication: (a: number, b: number) => number;
  division: (a: number, b: number) => number;
}

export class Calculator {
  private methods: IMethods;

  constructor(methods: IMethods) {
    this.methods = methods;
  }

  add(a: number, b: number) {
    return this.methods.addition(a, b);
  }

  subtract(a: number, b: number) {
    return this.methods.subtraction(a, b);
  }

  multiply(a: number, b: number) {
    return this.methods.multiplication(a, b);
  }

  divide(a: number, b: number) {
    return this.methods.division(a, b);
  }
}
