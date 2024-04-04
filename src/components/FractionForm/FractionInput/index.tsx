import { useEffect, useState } from "react";
import { IonInput } from "@ionic/react";
import { Fraction } from "../../../classes/FractionCalculator";

type Props = {
  value: Fraction;
  setValue: (value: Fraction) => void;
};

const FractionInput = ({ value, setValue }: Props) => {
  const [numerator, setNumerator] = useState<number>(value.numerator);
  const [denominator, setDenominator] = useState<number>(value.denominator);
  useEffect(() => {
    setValue({ numerator, denominator });
  }, [numerator, denominator]);
  const handleParse = (value: string) => {
    const parsed = parseInt(value);
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed;
  };
  return (
    <div style={{ width: "100px" }}>
      <IonInput
        type="number"
        value={numerator}
        onIonChange={(e) => setNumerator(handleParse(e.detail.value ?? ""))}
      />
      <hr style={{ background: "gray" }} />
      <IonInput
        type="number"
        value={denominator}
        onIonChange={(e) => setDenominator(handleParse(e.detail.value ?? ""))}
      />
    </div>
  );
};

export default FractionInput;
