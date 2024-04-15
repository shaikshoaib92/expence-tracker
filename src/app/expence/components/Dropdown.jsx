import React from 'react'
import "../style.css";
 

const Dropdown = ({setter, category}) => {
  return (
    <div>
      <select  className='dropdown' onChange={setter} value={category}>
            <option>Select</option>
            <option >Food</option>
            <option >Groceries</option>
            <option >Shopping</option>
            <option >Fixed</option>
            <option >Miscellaneous</option>
          </select>
    </div>
  )
}

export default Dropdown
