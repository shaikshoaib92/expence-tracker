import React from "react";
import Cards1 from "./components/Cards1";
import Cards2 from "./components/Cards2";


const HomePage = () => {
  const data = [
    {
      categorie: "Food",
      expenses: [],
    },
    {
      categorie: "Groceries",
      expenses: [],
    },
    {
      categorie: "Shopping",
      expenses: [],
    },
    {
      categorie: "Fixed",
      expenses: [],

    },
    
  ];

  const data2 = [
    {
      categorie: "Miscellaneous",
      expenses: [],
    },
  ];

  return (
    <div className="parent">
      <div className="child1">
        {data.map((item) => {
          return <Cards1 item={item} />;
        })}
      </div>



      <div className="child2">
        {data2.map((expence) => {
          return <Cards2 item={expence} />;
        })}
      </div>


    </div>
  );
};

export default HomePage;
