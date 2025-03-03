import { ItemNavbar } from "../../componets/ItemNavbar";
import { FaFacebook ,FaInstagram ,} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import "./Footer.css"
export const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <ItemNavbar contentItem={<FaFacebook />}  />
        <ItemNavbar contentItem={<BsWhatsapp />}  />
        <ItemNavbar contentItem={<FaInstagram />}  />
       
      </ul>
      
      </footer>
  )
}
