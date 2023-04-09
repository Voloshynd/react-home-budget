import React from "react";
import { useContext } from "react";
import dataContext from "../context";

const SumExpences = ({ sum }) => {
  let totalSumExpence = sum.reduce((prev, next) => prev + next, 0);
  const context = useContext(dataContext);
  const { setTotalSumExpence } = context;

  setTotalSumExpence(totalSumExpence);

  return !sum.length ? null : (
    <div>
      <p>
        Suma wydatków:{" "}
        <span className="amount">{totalSumExpence} zł</span>
      </p>
    </div>
  );
};

export default SumExpences;
