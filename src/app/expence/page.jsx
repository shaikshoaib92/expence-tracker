"use client";
import { useState, useEffect } from "react";
import React from "react";
import { addExpense, getAllCategories } from "./services/api";
import CategoriesCard from "./components/CategoriesCard";
import SumCard from "./components/SumCard";
import Dropdown from "./components/Dropdown";
import axios from "axios";

import "./style.css";

const ExpencePage = () => {
  const [expense, setExpence] = useState();
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState();
  const [newExpense, setNewExpense] = useState(null);
  const [data, setData] = useState();
  const [run,setRun] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCategories();
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, [run]);

  // const data = response?.data;

  const handleExpenseChange = (event) => {
    setExpence(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddExpense = async () => {
    if (expense && amount && category) {
      const newExpenseItem = {
        expense: expense,
        categorie: category,
        amount: amount,
      };
      try {
        const response = await addExpense(newExpenseItem).then(() => {
          setExpence("");
          setAmount("");
          setCategory("");
          setRun(!run)
        });
        response.newExpenseItem;
      } catch (error) {
        console.error("Error adding expense:", error);
      }
    }
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  return (
    <div>
      <div className="container-1">
        <div className="textfields">
          <div>
            <input
              className="input1"
              type="text"
              placeholder="Expense"
              value={expense}
              onChange={handleExpenseChange}
            />
          </div>
          <div>
            <input
              className="input2"
              type="text"
              placeholder="Amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>

          <Dropdown setter={handleCategoryChange} category={category} />
          {/* <SumCard/> */}
        </div>
        <div className="butn">
          <button className="button-send" onClick={handleAddExpense}>
            Send
          </button>
        </div>
      </div>
      <div className="cate-header">
        {data?.map((item) => {
          return (
            <CategoriesCard
              key={item?.categorie}
              item={item}
              newExpense={newExpense}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExpencePage;
