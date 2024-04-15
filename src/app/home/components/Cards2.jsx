import React from 'react'

const Cards2 = ({item}) => {
  return (
    <div>
       
       <div className="header-2">
        <p className='heading'>{`Top 10 ${item?.categorie} Expenses`}</p>
        <ol>
          {item?.expenses.map((expence) => {
            return (
              <li className='lists'>
                {expence?.item}
                {expence?.price}
              </li>
            );
          })}
        </ol>
      </div>

      
      </div>



   
  )
}

export default Cards2
