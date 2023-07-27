import './App.css';
import Theme from './component/Theme';
import Navbar from './section/Navbar/Navbar';
import About from './section/about/About';
import Contact from './section/contact/Contact';
import Faqs from './section/faqs/Faqs';
import Footer from './section/footer/Footer';
import Header from './section/header/Header';
import FloatingNav from './section/nav/FloatingNav';
import { useContext } from 'react';
import Portfolio from './section/portfolio/Portfolio';
import Services from './section/services/Services';
import Testimonial from './section/testimonial/Testimonial';
import { Themecontext } from './component/ThemeContext';
import { useRef, useEffect,useState} from  "react"

function App() {
const mainRef = useRef()
const [showfloatingnav,setShowfloatingnav]=useState(true)
const [siteyposition ,setSiteyposition]=useState(0)

const showfloatingNavHandler = ()=>{
  setShowfloatingnav(true)
}

const hidefloatingNavHandler = ()=>{
  setShowfloatingnav(false)
}

const floatingToggle = ()=>{
  if(siteyposition < (mainRef?.current?.getBoundingClientRect().y-20)|| siteyposition >(mainRef?.current?.getBoundingClientRect().y+20)){
    showfloatingNavHandler()
  }else{
    hidefloatingNavHandler()
  }
  setSiteyposition(mainRef.current.getBoundingClientRect().y)
}

useEffect(()=>{
const checkY = setInterval(floatingToggle,2000)

return ()=>clearInterval(checkY)
},[siteyposition])

console.log(mainRef?.current?.getBoundingClientRect())
 
const {themeState}= useContext(Themecontext)
  return (
    <main  className={`${themeState.primary} ${themeState.background}`}  ref={mainRef}>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Faqs/>
      <Contact/>
      <Footer/>
      <Theme/>
      {showfloatingnav && <FloatingNav/>  }
    </main>
  );
}
//{}[]
export default App;
