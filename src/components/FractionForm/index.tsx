import { useState } from "react";
import FractionInput from "./FractionInput";
import OperationSelect from "./OperationSelect";
import { Fraction, Operation } from "../../classes/FractionCalculator";
import withFractionCalculator, {
  WithInjectedCalculator,
} from "../../hocs/WithFractionCalculator";

type Props = {
  setResult: (result: Fraction) => void;
};

const Form = ({
  setResult,
  instance,
  changeFraction1,
  changeFraction2,
  changeOperation,
}: Props & WithInjectedCalculator) => {
  const [fraction1, setFraction1] = useState<Fraction>({
    numerator: 0,
    denominator: 1,
  });
  const [fraction2, setFraction2] = useState<Fraction>({
    numerator: 0,
    denominator: 1,
  });
  const [operation, setOperation] = useState<Operation>("add");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setResult(instance.show());
  };
  const handleFraction1Change = (fraction: Fraction) => {
    changeFraction1(fraction);
    setFraction1(fraction);
  };
  const handleFraction2Change = (fraction: Fraction) => {
    changeFraction2(fraction);
    setFraction2(fraction);
  };
  const handleOperationChange = (operation: Operation) => {
    changeOperation(operation);
    setOperation(operation);
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "fit-content" }}>
      <div
        style={{
          display: "flex",
          padding: "60px",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <FractionInput value={fraction1} setValue={handleFraction1Change} />
        <OperationSelect value={operation} setValue={handleOperationChange} />
        <FractionInput value={fraction2} setValue={handleFraction2Change} />
      </div>
      <button
        style={{ padding: "10px", margin: "0 auto", display: "block" }}
        type="submit"
        disabled={fraction1.denominator == 0 || fraction2.denominator == 0}
      >
        Calculate
      </button>
    </form>
  );
};

export default withFractionCalculator(Form);
