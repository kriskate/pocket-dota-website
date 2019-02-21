import React from 'react';
import { MDBContainer, MDBRow, } from "mdbreact";

// <div className="page-fixed" />
export default () => (
  <MDBContainer className="padtop">
    <MDBRow>
      <h4>Pocket Dota </h4> Is a free app that aims to give players an insight from within the game, when they're unable to access the actual game.
      <br/> It can also be used while playing the game, in order to keep track of the heroes and items of the opposing teams.
    </MDBRow>
    <MDBRow>
      <p>
      <h2>Contact</h2>
      <p>If you have any questions or suggestions about Pocket Dota, do not hesitate to contact me on <a href='https://discord.gg/WXjby2w' target='_blank'>Discord</a>.
        <div>
          <p>If you experience any issues while using this app, please use the <a href='https://discord.gg/BMCrMbw'>Issues</a> channel.</p>
          <p>If you would like to see more functionality brought into the app, use the <a href='https://discord.gg/mwP3FRM'>Feature Requests</a> channel.</p>
          <p>If you just wanna have a chat regarding this app, use the <a href='https://discord.gg/WXjby2w'>General</a> channel.</p>
        </div>
      </p>
      </p>
    </MDBRow>
  </MDBContainer> 
)