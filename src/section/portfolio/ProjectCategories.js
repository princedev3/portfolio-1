import React, { useState } from 'react'
import CategoryButton from './CategoryButton'


const ProjectCategories = ({list,handlechange}) => {

   // const [activeCategory,setActiveCategory] = useState("all")

    // const changeCategoryHandler = (activecat)=>{
      
    //     onfilterproject(activecat)
    // }

  return (
    <div className='porfolio__categories'>
        {
            list.map(each=>
                
                <CategoryButton list={each} key={each} itemChange={()=>handlechange(each)}/>
                )

        }
    </div>
  )
}
//{}[]
export default ProjectCategories