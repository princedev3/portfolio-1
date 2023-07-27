import React from 'react'
import "./testimonial.css"
import data  from './testimonialData';
import Testimonials from './Testimonials';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Pagination } from "swiper";



const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h2>What My Clients Say</h2>
      <p>these are unbaised testimonials from some of my clients</p>

      <div className='container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}

        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 3}
        }}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {
          data.map(testimonal=>(
            <SwiperSlide>
              <Testimonials  testimonal={testimonal} key={testimonal.id}/>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
    </section >
  )
}
//{}[]
export default Testimonial