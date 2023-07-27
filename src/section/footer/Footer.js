import { links,socials } from "./FooterData"
import "./footer.css"

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container footer__container">
          <ul className="nav__menu">
              {
                links.map(flink=><li key={flink.id}><a href={flink.link} rel="noopener noreferrer" target="_blank">{flink.title}</a></li>)
              }
          </ul>
          <div className="footer__socials">
              {
                socials.map(social=><a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</a>)
              }
          </div>
      </div>
      <div className="footer__copyright">
              <small>2022 FALCOON TUTORIALS &copy; AMAZING WEBSITE</small>
      </div>
    </footer >
  )
}
//{}[]
export default Footer