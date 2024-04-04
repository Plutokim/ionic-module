import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import FractionForm from "../components/FractionForm";
import { Fraction } from "../classes/FractionCalculator";
import { useState } from "react";

const Home: React.FC = () => {
  const [result, setResult] = useState<Fraction | null>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>МК 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FractionForm setResult={setResult} />
        {result && (
          <div style={{"padding":"60px"}}>
            <h2>Result: {result.numerator}/{result.denominator}</h2>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
