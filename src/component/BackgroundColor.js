import { useContext } from "react"
import { Themecontext } from "./ThemeContext"

const BackgroundColor = ({className}) => {
  const{themeHandler}= useContext(Themecontext)
  return (
    <button className={className} onClick={()=>themeHandler(className)}></button>
  )
}

export default BackgroundColor