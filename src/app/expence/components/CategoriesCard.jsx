import React from 'react'
import "../style.css";


const CategoriesCard = ({item}) => {
  return (
    <div>
      <div className="header">
            <p>{`Top 5 ${item.categorie} Expenses`}</p>
            <ol>
            {
                item.expenses.map((expence)=>{
                    return <li>{expence.item}{expence.price}</li>
                })
            }
              
              
            </ol>
          </div>
    </div>
  )
}

export default CategoriesCard
