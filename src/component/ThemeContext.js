import { useReducer,createContext,useEffect } from "react";
import themeReducer from "./themeReducer";


export const Themecontext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("theme1")) || {primary:"color-1",background:"bg-1"}

export const ThemeProvider = ({children})=>{

    const[themeState,dispatchTheme]=useReducer(themeReducer,initialThemeState)
   

    useEffect(()=>{
        localStorage.setItem("theme1",JSON.stringify(themeState))
    },[
        themeState.primary ,themeState.background
    ])

    const themeHandler = (buttonClassName)=>{
        dispatchTheme({type: buttonClassName})
    }

    return <Themecontext.Provider value={{themeHandler,themeState}}>{children}</Themecontext.Provider>
}