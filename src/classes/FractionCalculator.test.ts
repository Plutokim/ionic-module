import { FractionCalculator, Fraction } from './FractionCalculator';

describe('FractionCalculator', () => {
  test('Add Fractions', () => {
    const fraction1: Fraction = { numerator: 1, denominator: 2 };
    const fraction2: Fraction = { numerator: 1, denominator: 4 };
    const calculator = new FractionCalculator(fraction1, fraction2, 'add');
    expect(calculator.show()).toEqual({ numerator: 3, denominator: 4 });
  });

  test('Subtract Fractions', () => {
    const fraction1: Fraction = { numerator: 3, denominator: 4 };
    const fraction2: Fraction = { numerator: 1, denominator: 4 };
    const calculator = new FractionCalculator(fraction1, fraction2, 'subtract');
    expect(calculator.show()).toEqual({ numerator: 1, denominator: 2 });
  });

  test('Multiply Fractions', () => {
    const fraction1: Fraction = { numerator: 1, denominator: 2 };
    const fraction2: Fraction = { numerator: 3, denominator: 4 };
    const calculator = new FractionCalculator(fraction1, fraction2, 'multiply');
    expect(calculator.show()).toEqual({ numerator: 3, denominator: 8 });
  });

  test('Divide Fractions', () => {
    const fraction1: Fraction = { numerator: 3, denominator: 4 };
    const fraction2: Fraction = { numerator: 1, denominator: 2 };
    const calculator = new FractionCalculator(fraction1, fraction2, 'divide');
    expect(calculator.show()).toEqual({ numerator: 3, denominator: 2 });
  });
});
