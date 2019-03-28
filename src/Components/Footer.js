import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { AppName } from '../Utils/Assets';

export default () => (
  <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4 footer">
    <MDBContainer fluid className="text-center mb-4">
      <MDBRow>
        <MDBCol style={{ display: "none" }}>
          <a href='/contribute'>Contribute</a>
        </MDBCol>
        <MDBCol style={{ display: "none" }}>
          <a href='/license'>License</a>
        </MDBCol>

        <MDBCol>
          <a href='/contributions'>Contribute</a>
        </MDBCol>
        <MDBCol>
          <a href='/privacy-policy'>Privacy Policy</a>
        </MDBCol>
        <MDBCol>
          <a href='/support'>Support</a>
        </MDBCol>
        <MDBCol>
          <a href='/changelog'>Changelog</a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        <div>Dota 2 is a registered trademark of Valve Corporation.</div>
        <div><AppName /> is hereby not created, sponsored or endorsed by Valve Corporation.</div>
        <div>
          <a href="/license">Copyright {new Date().getFullYear()} @ kriskate</a>
        </div>
      </MDBContainer>
    </div>
  </MDBFooter>
)