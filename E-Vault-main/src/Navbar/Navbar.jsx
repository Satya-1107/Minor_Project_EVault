import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import styled from 'styled-components';
import "./Navbar.css";
import logooo from'../images/logooo.gif';
import profile from '../images/profile.png';
// import Home from "../Pages/Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAward , faIdCard, faCircleInfo, faLightbulb} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { type } from "@testing-library/user-event/dist/types/utility";


const Navbar = () => {

  // const [hover, setHover] = useState(false);

  // const buttonStyle = {
  //   background: '#ffffff',
  //   color: 'navy',
  //   width: '100px',
  //   border: 'none',
  //   padding: '15px 10px',
  //   borderRadius: '5px',
  //   cursor: 'pointer',
    
    
  // };

  
  return (
    
    <div className="Main-header">
      <div className="Header">
        <div className='logo'> 
          <Link href="/home">
            <img src={logooo} type="video/gif/" autoPlay loop muted width={230} 
            
            /> 
          </Link>

        </div>

        <nav className="navbar">

          <div className="Home">
            <Link to="/home">
              <i><FontAwesomeIcon icon={faUser} className="Home-icon"/></i> Profile
            </Link>
          </div>

          <div className="Get-document">
            <Link to="/getdocument">
              <i><FontAwesomeIcon icon={faIdCard} className="Get-icon"/></i> Your Document
              </Link>
          </div>

          <div className="Issued-document">
            <Link to="/issueddocument">
              <i><FontAwesomeIcon icon={faAward} className="Issued-icon"/></i> Issued Document
            </Link>
          </div>

          <div className="About">
            <Link to="/About">
              <i><FontAwesomeIcon icon={faCircleInfo} className="About-icon"/></i> About</Link>
          </div>

          <div className="Help">
            <Link to="/help">
              <i><FontAwesomeIcon icon={faLightbulb} className="Help-icon"/></i> Support</Link>
          </div>
        </nav>

        <ConnectWallet className="buttonn"/>

        {/* <div className="hero">
          <img src={profile} className="user-pic" ></img>

          <div className="sub-menu-wrap">
            <div className="sub-menu">
              <div className="user-info">
                <img src={profile} ></img>
                <h2>keyur patel</h2>
              </div>
              <hr></hr>

              <a href="#" className=" sub-menu-link">
                <p>Info</p>
              
              </a>
            </div>
          </div> */}
        {/* </div> */}
      </div> 
    </div>
  );
};

export default Navbar;
