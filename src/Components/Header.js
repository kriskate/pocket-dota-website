import React from 'react';
import { 
  Navbar, NavbarBrand,  NavbarToggler, 
  Collapse, Container
} from 'mdbreact';
import NavItems from './NavItems';

import { Images } from '../Utils/Assets';

export default ({ collapse, toggleNavbar, applyHeaderBackground }) => (
  <Navbar dark expand="md" fixed="top" scrolling className={applyHeaderBackground ? "top-nav-collapse" : ""} >
    <Container>
      <NavbarBrand style={{color:'white'}} href='/'>
        <img alt="logo" src={Images.logo} id="logo" className="img-fluid rounded" />
      </NavbarBrand>
      <NavbarToggler onClick={ toggleNavbar } />
      <Collapse isOpen={collapse} navbar>
        <NavItems />
      </Collapse>
    </Container>
  </Navbar>
)