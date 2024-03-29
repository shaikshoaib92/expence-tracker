import React from "react";
import "./style.css";
import CategoriesCard from "./components/CategoriesCard";
import SumCard from "./components/SumCard";
import Dropdown from "./components/Dropdown";

const ExpencePage = () => {
  //This data will get after an api call usually.

  const data = [
    {
      categorie: "Grocery",
      expenses: [
        {
          item: "kaju",
          price: 500,
        },
        {
          item: "badam",
          price: 500,
        },
        {
          item: "Sugar",
          price: 500,
        },
        {
          item: "Rice",
          price: 500,
        },
        {
          item: "Daal",
          price: 500,
        },
        {
          item: "fruits",
          price: 500,
        },
      ],
    },
    {
      categorie: "food",
      expenses: [
        {
          item: "mandi",
          price: 500,
        },
        {
          item: "Biyani",
          price: 500,
        },
        {
          item: "Tabuz",
          price: 500,
        },
        {
          item: "Bhajiye",
          price: 500,
        },
        {
          item: "Madem ki maar, usek baad uno diye so goliya food samjke",
          price: 500,
        },
        {
          item: "mandi",
          price: 500,
        },
      ],
    },
    {
      categorie: "Shopping",
      expenses: [
        {
          item: "Watch",
          price: 500,
        },
        {
          item: "purce",
          price: 500,
        },
        {
          item: "Shoes",
          price: 500,
        },
        {
          item: "Gulab ka phool",
          price: 500,
        },
        {
          item: "Madem ki maar se bachne unku dress",
          price: 500,
        },
        {
          item: "belt",
          price: 500,
        },
      ],
    },
    
  ];

  return (
    <div className="parent-div">
      <div className="container-1">
        <div className="textfields">
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <Dropdown />
          <div>
            <input type="text" value="total amount spend" />
          </div>
          <SumCard />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      <div className="cards">
        {data.map((item) => {
          return <CategoriesCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default ExpencePage;
