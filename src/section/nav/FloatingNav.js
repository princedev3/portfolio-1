import React from 'react'
import "./floatingnav.css"
import data from './data'
import Scrollspy from "react-scrollspy"
import Nav from './Nav'

const FloatingNav = () => {
  return (
    <ul id='floatingnav'>
      <Scrollspy offset={-400} currentClassName='active' className='scrollspy' items={["header","about","portfolio","services","contact"]}>
          {data.map(item => <Nav key={item.id} item={item}/>)}
      </Scrollspy>
    </ul >
  )
}
//{}[]
export default FloatingNav