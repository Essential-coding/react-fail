import { NavLink } from "react-router-dom"
import logoType from "../assets/HeaderImages/logotype.svg"
import SocialMedia from "../components_core/SocialMedia"
import YellowButton from "../components_core/YellowButton"



const Header = () => {

  


  return (
    <>     
      <header className="header-bg-color">
            <div className="container">
                <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
                <div className="logotype">
                <NavLink to="/">
                <img src={logoType} alt="Logo for a company called Crito" />
                </NavLink>
                </div>
                <div className="contactinformation-bar">
                    <div className="content-box">
                        <i className="fa-solid fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                        info@crito.com
                    </div>
                    <div className="content-box last">
                        <i className="fa-solid fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <SocialMedia/>
                <div className="menu">
                    <nav>
                        <NavLink to = "/">Home</NavLink>
                        <NavLink to = "/Services">Services</NavLink>
                        <NavLink to = "/News">News</NavLink>
                        <NavLink to = "/Contact">Contact</NavLink>
                    </nav>
                    <YellowButton type="btn-yellow" text="Login" url="/"></YellowButton>
                </div>


            </div>
        </header>
    </>
  )
}

export default Header