import React from "react";

const Balance = ({ incomes, expences }) => {
  return (
    <>
      <div className="logo">
        {" "}
        <img
          src={process.env.PUBLIC_URL + "./icon_200x2001.png"}
          alt="logo-app"
        />
        ;
      </div>
      <div id="cash-balance">
        <p>
          Bilans wynosi{" "}
          <span className="amount"> {incomes - expences} zł </span>
        </p>
      </div>
    </>
  );
};

export default Balance;
