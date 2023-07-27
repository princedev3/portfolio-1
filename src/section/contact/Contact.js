import React from 'react'
import "./contact.css"
import data from './contactData'


const Contact = () => {
  return (
    <section id='contact'>
      <h2>Get in Touch</h2>
      <p>Shoot me a message via any of the Links below</p>
      <div className='container contact__container'>
      {
        data.map(contact=> <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer'>{contact.icon}</a>)
      }
      </div>
    </section >
  )
}
//{}[]

export default Contact