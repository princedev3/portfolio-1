import React from 'react'
import "./header.css"
import head from "../../assets/me-about.jpg"
import { dataIcon } from '../../Data'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
              <div className='header__profile'>
                  <img src={head} alt="head"/>
              </div>
              <h3>Prince Hector</h3>
              <p>
                  we all keep calling a death sphere? Thbeing a slave. I'm sorry, guys. I never meant to hurt you. Just to destroy everything you ever believed in.
              </p>
             <div className='header__cta'>
              <a href='#contact' className='btn primary'>Let's Talk</a>
              <a href='#portfolio' className='btn white'>My Work</a>
             </div>

             <div className='header__socials'> 
                    {
                      dataIcon.map(item=><a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.title}</a>)
                    }
             </div>
      </div>
    </header>
  )
}
//{}[]
export default Header