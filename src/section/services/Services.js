import React from 'react'
import "./services.css"
import { serviceData } from '../../Data'
import Card from '../../component/Card'

const Services = () => {
  return (
    <section id='service'>
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className='container services__container'>
          {
            serviceData.map(item=>(
              <Card key={item.id} className={"service light"}>
                  <div className='service__icon'>{item.icon}</div>
                  <div className='service__details'>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
              </Card>
            ))
          }
      </div>
    </section >
  )
}
//{}[]
export default Services