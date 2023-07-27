import React from 'react'
import "./faqs.css"
import data from "./FaqData"
import FAQ from './FAQ'
const Faqs = () => {
  return (
    <section id='faqs'>
      <h2>Frequently Asked Questions</h2>
      <p>here are some questions i usually get. click to toggle the answer, and if you still have some more questions, shoot me a message from the contact section</p>
      <div className='container faqs__container'>
        {
          data.map(faq=>(
            <FAQ faq={faq} key={faq.id}/>
          ))
        }
      </div>
    </section >
  )
}

export default Faqs