import React from 'react';
import { MDBContainer, MDBRow, } from "mdbreact";
import { Images, AppName } from '../Utils/Assets';

export default class Support extends React.PureComponent {
  componentDidMount() {
    this.props.headerBackground(true);
  }
  render() {
    return (
      <MDBContainer className="padtop support-page">
        <MDBRow>
          <p>
            <h2>About</h2>
            <p>
              <AppName /> - Is a free app that aims to give players an insight from within the game, when they're unable to access the actual game.<br/>
              It can also be used while playing the game, in order to keep track of the heroes and items of the opposing teams.
            </p>
          </p>
        </MDBRow>
        <MDBRow>
          <p>
          <h2>Contact</h2>
          <p>
            <p>If you have any questions or suggestions about <AppName />, do not hesitate to contact me via email @ <a href='mailto:pocket.dota.app@gmail.com' target='_blank' rel="noopener noreferrer">pocket.dota.app@gmail.com</a>.</p>
              <h4><img height="20" alt="" src={Images.logo_discord} /> Discord</h4>
              If you experience any issues while using this app, use the <a href='https://discord.gg/BMCrMbw' target='_blank' rel="noopener noreferrer">Issues</a> channel.<br/>
              If you would like to see more functionality brought into the app, use the <a href='https://discord.gg/mwP3FRM' target='_blank' rel="noopener noreferrer">Feature Requests</a> channel.<br/>
              If you just wanna have a chat regarding this app, use the <a href='https://discord.gg/WXjby2w' target='_blank' rel="noopener noreferrer">General</a> channel.<br/>
            </p>
          </p>
        </MDBRow>
        {/* <img height="300" src={Images.icon} /> */}
      </MDBContainer> 
    )
  }
}