import React from 'react';
import { MDBContainer, MDBRow, } from "mdbreact";
import { Images, AppName } from '../Utils/Assets';

const changelogs = {
  "1.1.0": "Hero talent tree; Scrollable Homescreen with new items (Tip, Patch Notes, Settings); Dota 2 game tips; Patch notes; No images recache at wiki update",
  "1.2.2": "Hero roles; Hero complexity; Hero advanced attributes; Hero changelog (from Patch notes); Item changelog (from Patch notes); Recalculated attribute bonuses; Added default wiki data; No longer have to download additional data on first run; User consent for pre-caching images; UI tweaks (eg: disable menu bounce on IOS); Expo SDK upgrade; Various performance enhancements;",
  "1.3.0": "Added translations engine; Available additional languages: French, Romanian;",
  "2.0.0": "Rebranded to Pocket Info for Dota2; Minor layout adjustments;",
}
export default class Changelog extends React.PureComponent {
  componentDidMount() {
    this.props.headerBackground(true);
  }
  render() {
    return (
      <MDBContainer className="padtop">
      <h2 style={{ display: "inline-block" }}>Changelog</h2> - <AppName noLogo /> version history
      {Object.keys(changelogs).map(log => (
        <MDBRow>
          <p>
            <h4>{log}:</h4>
            { changelogs[log].split(';').map(change => (
              <div>{change}</div>
            )) }
          </p>
        </MDBRow>
      ))}

        {/* <img height="300" src={Images.icon} /> */}
      </MDBContainer> 
    )
  }
}