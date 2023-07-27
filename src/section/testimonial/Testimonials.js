import React from 'react'
import Card from '../../component/Card'


const Testimonials = ({testimonal}) => {
  return (
    <Card className={"light"}>
            <p>{testimonal.quote}</p>

            <div className='testimonial__client'>

                <div className='testimonial__client-avatar'> 
                <img src={testimonal.avatar} alt=""/>
                </div>

                    <div className='testimonial__client-details'>
                        <h6>{testimonal.name}</h6>
                        <small>{testimonal.profession}</small>
                    </div>
            </div>
    </Card>
  )
}

export default Testimonials