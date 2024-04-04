import { IShowResults } from "../interfaces/IShowResults";

export type Fraction = {
  numerator: number;
  denominator: number;
};

type OperationResult = Fraction;

export type Operation = "add" | "subtract" | "multiply" | "divide";

export class FractionCalculator implements IShowResults {
  private fraction1: Fraction;
  private fraction2: Fraction;
  private operation: Operation;
  private result: OperationResult = { numerator: 0, denominator: 1 };

  constructor(fraction1: Fraction, fraction2: Fraction, operation: Operation) {
    this.fraction1 = fraction1;
    this.fraction2 = fraction2;
    this.operation = operation;
  }

  private simplifyFraction(fraction: Fraction): Fraction {
    const gcd = this.greatestCommonDivisor(
      fraction.numerator,
      fraction.denominator
    );
    return {
      numerator: fraction.numerator / gcd,
      denominator: fraction.denominator / gcd,
    };
  }

  private greatestCommonDivisor(a: number, b: number): number {
    return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
  }

  private calculateResult() {
    switch (this.operation) {
      case "add":
        this.result = this.addFractions();
        break;
      case "subtract":
        this.result = this.subtractFractions();
        break;
      case "multiply":
        this.result = this.multiplyFractions();
        break;
      case "divide":
        this.result = this.divideFractions();
        break;
      default:
        this.result = { numerator: 0, denominator: 1 };
    }
  }

  private addFractions(): OperationResult {
    const commonDenominator =
      this.fraction1.denominator * this.fraction2.denominator;
    const numeratorSum =
      this.fraction1.numerator * this.fraction2.denominator +
      this.fraction2.numerator * this.fraction1.denominator;
    const result = { numerator: numeratorSum, denominator: commonDenominator };
    return this.simplifyFraction(result);
  }

  private subtractFractions(): OperationResult {
    const commonDenominator =
      this.fraction1.denominator * this.fraction2.denominator;
    const numeratorDiff =
      this.fraction1.numerator * this.fraction2.denominator -
      this.fraction2.numerator * this.fraction1.denominator;
    const result = { numerator: numeratorDiff, denominator: commonDenominator };
    return this.simplifyFraction(result);
  }

  private multiplyFractions(): OperationResult {
    const numeratorProd = this.fraction1.numerator * this.fraction2.numerator;
    const denominatorProd =
      this.fraction1.denominator * this.fraction2.denominator;
    const result = { numerator: numeratorProd, denominator: denominatorProd };
    return this.simplifyFraction(result);
  }

  private divideFractions(): OperationResult {
    const numeratorQuot = this.fraction1.numerator * this.fraction2.denominator;
    const denominatorQuot =
      this.fraction1.denominator * this.fraction2.numerator;
    const result = { numerator: numeratorQuot, denominator: denominatorQuot };
    return this.simplifyFraction(result);
  }

  public show() {
    this.calculateResult();
    console.log(`Result: ${this.result.numerator}/${this.result.denominator}`)
    return this.result;
  }
}
