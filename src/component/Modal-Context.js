import { createContext,useState } from "react";


export const ModalContext = createContext()

export const ModalProvider = ({children})=>{
    
    const [showModal,setShowModal]= useState(false)

    const showModalHandler = ()=>{
        setShowModal(true)
    }
    const closeModalHandler = ()=>{
        setShowModal(false)
    }
    return <ModalContext.Provider value={{showModal,showModalHandler,closeModalHandler}}>
            {children}
    </ModalContext.Provider>
}