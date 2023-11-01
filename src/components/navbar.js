import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
// import {LinkContainer} from 'react-router-bootstrap';
import { configureAnchors } from 'react-scrollable-anchor';
import kLogo from './images/kLogo.png';
import horizon_small from './images/horizon_small.png';
//

export default (props)=>{
    console.log('inside')
    console.log('Navbar Props', props)
    let language = props.language

    const scrollToSection = (id) => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        };

       
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    configureAnchors({offset: -60, scrollDuration: 600})
    return(
        <Navbar inverse collapseOnSelect fixedTop id='navbar'>
  <Navbar.Header>
    <Navbar.Brand>
      {/*<LinkContainer to='/'><a>Be<small>+</small></a></LinkContainer>*/}
      {/* <LinkContainer to='/'>  */}
        <div id='logoContainer' onClick={() => scrollToTop()}>
          <img className='logo' src={horizon_small} />
          <h4> NewTech Horizons</h4>  
        </div>
      {/* </LinkContainer> */}
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
    

  <Navbar.Collapse>
    <Nav pullRight>
      {/* <NavItem eventKey={1} id='about' href='#about'>About Us</NavItem>
      <NavItem eventKey={2} id='ourWork' href='#ourWork'>Our Work</NavItem>
      <NavItem eventKey={1} id='services' href='#services' >Services</NavItem>
      <NavItem eventKey={2} id='contact' href='#contact'>Contact</NavItem> */}
  <NavItem eventKey={2} onClick={() => scrollToSection('aboutUs')}>About Us</NavItem>
  <NavItem eventKey={3} onClick={() => scrollToSection('ourWork')}>Our Work</NavItem>
  <NavItem eventKey={1} onClick={() => scrollToSection('services')}>Services</NavItem>
  <NavItem eventKey={2} onClick={() => scrollToSection('contactUs')}>Contact</NavItem>
      <NavItem>
        {
          language==='esp'?
          <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> English Site</p>
          :
          <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> Sitio en Español</p>
        }
    </NavItem>
    </Nav>
  </Navbar.Collapse>
  {
  // <div id='lang'>
  //   {
  //     language==='esp'?
  //     <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> English Site</p>
  //     :
  //     <p onClick={props.changeLanguage} ><span className="glyphicon glyphicon-globe"></span> Sitio en Español</p>
  //   }
  // </div>
  }
</Navbar>
    )
} 