import BackgroundColor from "./BackgroundColor"
import Modal from "./Modal"
import PrimaryColor from "./PrimaryColor"
import { primaryColors,backgroundColors } from "./data"
import "./Theme.css"



const Theme = () => {

  return (
    <Modal className="theme__modal">
        <h3>Customise Your Theme</h3>
       <small>Change the primary and background color to your preference </small>

       <div className="theme__primary-wrappper">
        <h5>Primary Color</h5>
        <div className="theme__primary-colors">
        {primaryColors.map(pcolor=><PrimaryColor className={pcolor.className} key={pcolor.className}/>)}
        </div>
       </div>

       <div className="theme__background-wrapper">
        <h5>Background Color</h5>
        <div className="theme__background-colors">
                {backgroundColors.map(bcolors=><BackgroundColor className={bcolors.className} key={bcolors.className}/>)}
        </div>
       </div>
    </Modal>
  )
}
//{}[]
export default Theme