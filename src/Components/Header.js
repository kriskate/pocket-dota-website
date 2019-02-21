import React from 'react';
import { 
  Navbar, NavbarBrand,  NavbarToggler, 
  Collapse, Container
} from 'mdbreact';
import NavItems from './NavItems';

import { Images } from '../Utils/Assets';

export default ({ collapse, toggleNavbar }) => (
  <Navbar dark expand="md" fixed="top" scrolling>
    <Container>
      <NavbarBrand style={{color:'white'}}>
        <img alt="logo" src={Images.icon} id="logo" className="img-fluid rounded" /> Pocket Dota
      </NavbarBrand>
      <NavbarToggler onClick={ toggleNavbar } />
      <Collapse isOpen={collapse} navbar>
        <NavItems />
      </Collapse>
    </Container>
  </Navbar>
)