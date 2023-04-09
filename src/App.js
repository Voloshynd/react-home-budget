import Balance from "./components/Balance";
import Income from "./components/Income";
import Expences from "./components/Expence";
import { useState } from "react";
import dataContext from "./context";
import "./App.css";

function App() {
  const { Provider } = dataContext;

  const [totalSumIncomes, setTotalSumIncomes] = useState("");
  const [totalSumExpence, setTotalSumExpence] = useState("");
  const value = { setTotalSumIncomes, setTotalSumExpence };

  return (
    <Provider value={value}>
      <div className="App">
        <Balance incomes={totalSumIncomes} expences={totalSumExpence} />
        <div className="structure">
          <Income />
          <Expences />
        </div>
      </div>
    </Provider>
  );
}

export default App;
