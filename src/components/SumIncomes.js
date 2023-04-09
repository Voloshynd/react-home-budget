import React from "react";
import { useContext } from "react";
import dataContext from "../context";

const SumIncomes = ({ sum }) => {
  let totalSumIncome = sum.reduce((prev, next) => prev + next, 0);
  const context = useContext(dataContext);
  const { setTotalSumIncomes } = context;

  setTotalSumIncomes(totalSumIncome);

  return !sum.length ? null : (
    <div>
      <p>
        Suma przychodów:{" "}
        <span className="amount">{totalSumIncome} zł</span>
      </p>
    </div>
  );
};

export default SumIncomes;
