import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default () => (
  <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
    <MDBContainer fluid className="text-center mb-4">
      <MDBRow>
        <MDBCol>
          <a href='/'>Home</a>
        </MDBCol>
        <MDBCol>
          <a href='/privacy-policy'>Privacy Policy</a>
        </MDBCol>
        <MDBCol>
          <a href='/support'>Support</a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        <div>Dota 2 is a registered trademark of Valve Corporation.</div>
        <div>Pocket Dota is hereby not created, sponsored or endorsed by Valve Corporation.</div>
        <div>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.pocket-dota.info">Pocket-dota.info</a>. </div>
      </MDBContainer>
    </div>
  </MDBFooter>
)