import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineGithub,AiOutlineDribbble, AiFillAppstore} from "react-icons/ai"
import {FaAward,FaServer} from "react-icons/fa"
import {TbBooks} from "react-icons/tb"
import {BiHappyHeartEyes} from "react-icons/bi"
import {SiAdobexd} from "react-icons/si"
import {RiReactjsLine} from "react-icons/ri"


export const data = [
    {id:1,link:"#",title:"Home"},
    {id:2,link:"#about",title:"about"},
    {id:3,link:"#service",title:"service"},
    {id:4,link:"#portfolio",title:"portfolio"},
    {id:5,link:"#contact",title:"contact"},
]
export const dataIcon = [
    {id:1,link:"https://instagram.com",title:<AiOutlineInstagram/>},
    {id:2,link:"https://dribble.com",title:<AiOutlineDribbble/>},
    {id:3,link:"https://twitter.com",title:<AiOutlineTwitter/>},
    {id:4,link:"https://github.com",title:<AiOutlineGithub/>},
    
]
export const aboutData = [
    {id:1,title:"Experience",icon:<FaAward/>, desc:"2 Years Working"},
    {id:2,title:"Projects",icon:<TbBooks/>, desc:"16+ Completed"},
    {id:3,title:"Clients",icon:<BiHappyHeartEyes/>, desc:"2 Happy Clients"},
]
export const serviceData = [
    {id:1,title:"Backend",icon:<FaServer/>, desc:"nuclear wessels! Well, then good news! It's a suppository. Why am I sticky and naked? Did"},
    {id:2,title:"UI/UX Design",icon:<SiAdobexd/>, desc:"nuclear wessels! Well, then good news! It's a suppository. Why am I sticky and naked? Did"},
    {id:3,title:"Frontend",icon:<RiReactjsLine/>, desc:"nuclear wessels! Well, then good news! It's a suppository. Why am I sticky and naked? Did"},
    {id:3,title:"App Development",icon:<AiFillAppstore/>, desc:"nuclear wessels! Well, then good news! It's a suppository. Why am I sticky and naked? Did"},
]

