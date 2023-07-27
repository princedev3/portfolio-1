import { useState } from "react"
import Card from "../../component/Card"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const FAQ = ({faq}) => {
    const [show,setShow]= useState(false)

  return (
    <Card className={"faq"} onClick={()=>setShow(!show)}>
        <div>
            <h5 className="faq__question">{faq.question}</h5>
         <button className="faq__icon">
         {show ?<AiOutlineMinus/>: <AiOutlinePlus/>}
                </button>
        </div>
        {show && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  )
}

export default FAQ