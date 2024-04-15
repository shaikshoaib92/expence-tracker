import React from "react";
import "../style.css";

const Cards1 = ({ item }) => {
  return (
    <div>
      <div className="header-1">
        <p className="heading">{`Top 5 ${item?.categorie} Expenses`}</p>
        <ol>
          {item?.expenses.map((expence) => {
            return (
              <li className="lists">
                {expence?.item}
                {expence?.price}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Cards1;
