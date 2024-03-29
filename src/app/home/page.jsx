import React from "react";
import Cards1 from "./components/Cards1";
import Cards2 from "./components/Cards2"
import "./style.css";

const HomePage = () => {
  return (
    <div className="parent">
    <div className="child1">
      <Cards1 />
      <Cards1 />
      <Cards1 />
      <Cards1 />
    </div>
    <div className="child2">
    <Cards2/>

    </div>
    </div>

  );
};

export default HomePage;
