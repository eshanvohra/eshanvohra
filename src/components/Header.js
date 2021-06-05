import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar  light expand="md" data-aos="fade-down" data-aos-duration="3000">
        <NavbarBrand href="/" className="brand">ESHAN VOHRA</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navbarcont">
     
        <div className="tags"><a href="https://www.linkedin.com/in/eshan-vohra-19b43716a/"><img src="https://image.flaticon.com/icons/png/512/1384/1384088.png" alt="Linkedin"/></a></div>
        <div className="tags"><a href="https://github.com/eshanvohra"><img src="https://image.flaticon.com/icons/png/512/2111/2111432.png" alt="Github"/></a></div>
        <div className="tags"><a href="https://www.facebook.com/eshan.vohra.16"><img src="https://image.flaticon.com/icons/png/512/747/747374.png" alt="Facebook"/></a></div>
        <div className="tags"><a href="https://twitter.com/EshanVohra"><img src="https://image.flaticon.com/icons/png/512/1419/1419524.png" alt="Twitter"/></a></div>
          
          
          {/* <Nav className="mr-0 " navbar>
       
          </Nav>
           */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;