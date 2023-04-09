import React from "react";
import SumIncomes from "./SumIncomes";

const ListIncomes = ({ data, handleRemove, openEditModalWindow }) => {
  const arr = [];
  data.map((item) => arr.push(item.amount));

  return (
    <ul id="list-of-incoms">
      {data.map((item, index) => {
        return (
          <li key={item.title + index}>
            <div>
              <span>{item.title} - </span>{" "}
              <span className="amount">{item.amount} zł</span>
            </div>
            <div>
              <button
                onClick={() =>
                  openEditModalWindow(index, item.title, item.amount)
                }
              >
                Edytuj
              </button>{" "}
              <button onClick={() => handleRemove(index)}>Usun</button>
            </div>
          </li>
        );
      })}
      <hr />
      <SumIncomes sum={arr} />
    </ul>
  );
};

export default ListIncomes;
