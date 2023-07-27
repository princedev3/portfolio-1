//{}[]
import "./modal.css"
import  ReactDOM  from 'react-dom'
import Card from './Card'
import { useContext } from "react"
import { ModalContext } from "./Modal-Context"

const Modal = ({className,children}) => {
    const {showModal,closeModalHandler} = useContext(ModalContext)
  return (
    <>
    {showModal &&
        ReactDOM.createPortal(<>
        <section id='backdrop' onClick={closeModalHandler}></section>
        <Card className={className}> {children}</Card>,
     </>,document.querySelector("#overlays"))
    }
    </>
  )
}

export default Modal