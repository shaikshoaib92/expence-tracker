import React from "react";
import "../style.css";

const SumCard = ({data}) => {
  // const sum = data.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <div className="sum-card">
        <h5>Total Amount spent in all the categories. </h5>
        <p>50000/-</p>
        {/* <p>{sum}</p> */}
      </div>
    </div>
  );
};

export default SumCard;
