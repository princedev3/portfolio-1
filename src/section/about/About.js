import React from 'react'
import  "./about.css"
import my from "../../assets/my1.jpeg"
import cv from "../../assets/cv.pdf"
import {BsFillCloudDownloadFill} from "react-icons/bs"
import { aboutData } from '../../Data'
import Card from '../../component/Card'

//{}[]
const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
            <div className='about__left'>
                  <div className='about__portrait'>
                      <img src={my} alt='About Image'/>
                  </div>
            </div>

            <div className='about__right'>
                    <h2>About Me</h2>
                    <div className='about__cards'>
                        {
                          aboutData.map(item=>(
                            <Card key={item.id} className={"about__card"}>
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                          ))
                        }
                    </div>
                    <p>
                    Eeeee! Now say "nuclear wessels"! Well, then good news! It's a suppository. Why am I sticky and naked? Did I miss something fun? I've been there. My folks were always on me to groom myself and wear underpants. What am I, the pope?
                    </p>
                    <p>
                    Eeeee! Now say "nuclear wessels"! Well, then good news! It's a suppository. Why am I sticky and naked? Did I miss something fun? I've been there. My folks were always on me to groom myself and wear underpants. What am I, the pope?
                    </p>

                    <a href={cv} download className='btn primary'>Download CV <BsFillCloudDownloadFill/></a>
            </div>
      </div>
    </section >
  )
}

export default About