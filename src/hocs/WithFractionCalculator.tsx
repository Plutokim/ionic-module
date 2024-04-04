import { ComponentType, useEffect, useState } from "react";
import {
  Fraction,
  FractionCalculator,
  Operation,
} from "../classes/FractionCalculator";

export type WithInjectedCalculator = {
  changeFraction1: (fraction: Fraction) => void;
  changeFraction2: (fraction: Fraction) => void;
  changeOperation: (operation: Operation) => void;
  instance: FractionCalculator;
};

const withFractionCalculator = <P extends WithInjectedCalculator>(
  Component: ComponentType<P>
) => {
  const HOC = (props: Omit<P, keyof WithInjectedCalculator>) => {
    const [fraction1, setFraction1] = useState<Fraction>({
      numerator: 0,
      denominator: 1,
    });
    const [fraction2, setFraction2] = useState<Fraction>({
      numerator: 0,
      denominator: 1,
    });
    const [operation, setOperation] = useState<Operation>("add");
    const [instance, setInstance] = useState<FractionCalculator>(
      new FractionCalculator(fraction1, fraction2, operation)
    );
    useEffect(() => {
      setInstance(new FractionCalculator(fraction1, fraction2, operation));
    }, [fraction1, fraction2, operation]);

    return (
      <Component
        {...(props as P)}
        changeFraction1={setFraction1}
        changeFraction2={setFraction2}
        changeOperation={setOperation}
        instance={instance}
      />
    );
  };

  return HOC;
};

export default withFractionCalculator;
