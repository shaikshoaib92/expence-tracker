import React from "react";
import "../style.css";

const CategoriesCard = ({ item, newExpense }) => {
  return (
    <div>
      <div className="header-1">
        <p
        style={{
          marginLeft:15,
          fontWeight:700
          
        }}
        >{`${item?.categorie} Expenses`}</p>
        <div
          style={{
            height: "70%",
            overflowY:"auto",
          }}
        >
          <ol>
            {item?.expenses?.map((expence) => {
              return (
                <li key={expence.item}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                      }}
                    >
                      {expence.item}
                    </p>
                    <p
                      style={{
                        margin: 0,
                      }}
                    >
                      {expence.price}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div
          style={{
            width: "100%",
            border: "1px solid black",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                margin: 0,
              }}
            >
              Total:
            </p>
            <p
              style={{
                margin: 0,
              }}
            >
              {item?.amount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
