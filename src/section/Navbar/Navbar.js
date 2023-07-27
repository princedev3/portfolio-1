import React from 'react'
import "./navbar.css"
import my from "../../assets/my1.jpeg"
import { data } from '../../Data'
import { IoIosColorPalette} from 'react-icons/io'
import { useContext } from 'react'
import { ModalContext } from '../../component/Modal-Context'

const Navbar = () => {
                const {showModalHandler} =  useContext(ModalContext)

  return (
    <nav>
        <div className='container nav__container'>
            <a href='index.html' className='nav__logo'>
                    <img src={my} alt='logo'/>
            </a>

            <ul className='nav__menu'>
                    {
                    data.map(item=>
                    <li key={item.id} ><a href={item.link}>{item.title}</a></li>
                    )
                    }
            </ul>

            <button id='theme__icon' onClick={showModalHandler}>
                    <IoIosColorPalette/>
            </button>
        </div>
    </nav>
  )
}
//{}[]
export default Navbar