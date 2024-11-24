import { Header } from "./Container/Header";
import { Footer } from "./Container/Footer";
import { Container } from "./Container";
import { Calculator } from "./Container/Calculator";
import { Updater } from "./Container/Updater";
import { Dater } from "./Container/Dater";
import { useRates } from "./useRates";
export let rateSet = null;

const initialRatesTable = [
  { id: 0, curriency: "---", rate: 0.00 },
  { id: 1, curriency: "PLN", rate: 1.00 },
  { id: 2, curriency: "EUR", rate: 4.56 },
  { id: 3, curriency: "USD", rate: 3.95 },
  { id: 4, curriency: "GBP", rate: 5.30 },
  { id: 5, curriency: "CHF", rate: 4.88 },
];

export default function App() {

  rateSet = useRates({ initialRatesTable });

  return (
    <Container>
      <Dater />
      <Header title="Kalkulator walutowy" />
      {(rateSet.switcher && <Calculator />) || (!rateSet.switcher && <Updater />)}
      <Footer date="2024" />
    </Container>
  );
};

