import "./Footer.css"
import {AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"

const Footer = () => {


    return (
    <div className="footer">
     <h6  className="footer-text"> © 2023 Copyright: Mealway.com</h6> 
     <div className="d-flex flex-column ">
      <h6>Follow Us On Social Media</h6>
      <div className="d-flex justify-content-center gap-3  fs-4">
      <AiFillFacebook className="icon"/>
      <AiOutlineTwitter className="icon"/>
      <AiFillInstagram className="icon"/>
      <AiFillLinkedin className="icon"/>
      </div>
     </div>
     <div className="text-center">
      <h6>Contact Us</h6>
      <BsWhatsapp className="icon"/>
      </div>
    </div>
  )
}

export default Footer