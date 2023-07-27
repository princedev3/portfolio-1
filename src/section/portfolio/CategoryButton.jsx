import React from 'react'

const CategoryButton = ({list,itemChange}) => {
    
  return (
    <button 
   onClick={itemChange}
    >{list}</button>
  )
}

export default CategoryButton