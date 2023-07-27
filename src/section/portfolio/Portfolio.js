import React, { useState } from 'react'
import "./portfolio.css"
import ProjectCategories from './ProjectCategories'
import Projects from './Projects'
import data from './data'

const Portfolio = () => {
  
const [project,setProject]= useState(data)

const uniquecategories =["all",... new Set(data.map(category=>category.category))]


const [list ,setList]= useState(uniquecategories)

const handlechange = (cate)=>{
  if(cate==="all"){
    setProject(data)
    return
  }

  const filteritem = data.filter(item=>item.category ===cate)
  setProject(filteritem)
}

  return (
    <section id='portfolio'>
        <h2>Recent Project</h2>
        <p>check out some of the projects i recently workrd on for my clients. use the buttons to toggle the different categories</p>
        <div className='container porfolio__container'>
          <ProjectCategories list={list} handlechange={handlechange}/>


          <Projects project={project}/>
        </div>
    </section >
  )
}
////{}[]
export default Portfolio