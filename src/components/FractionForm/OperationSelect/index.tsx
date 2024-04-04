import { IonSelect, IonSelectOption } from "@ionic/react";
import { Operation } from "../../../classes/FractionCalculator";

type Props = {
  value: Operation;
  setValue: (value: Operation) => void;
};

const OperationSelect = ({ value, setValue }: Props) => {
  return (
    <div style={{ width: "100px" }}>
      <IonSelect value={value} onIonChange={(e) => setValue(e.detail.value)}>
        <IonSelectOption value="add">Add</IonSelectOption>
        <IonSelectOption value="subtract">Subtract</IonSelectOption>
        <IonSelectOption value="multiply">Multiply</IonSelectOption>
        <IonSelectOption value="divide">Divide</IonSelectOption>
      </IonSelect>
    </div>
  );
};

export default OperationSelect;
