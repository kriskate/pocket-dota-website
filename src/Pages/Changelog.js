import React from 'react';
import { MDBContainer, MDBRow, } from "mdbreact";
import { AppName } from '../Utils/Assets';

const changelogs = {
  "1.1.0": "Hero talent tree; Scrollable Homescreen with new items (Tip, Patch Notes, Settings); Dota 2 game tips; Patch notes; No images recache at wiki update",
  "1.2.2": "Hero roles; Hero complexity; Hero advanced attributes; Hero changelog (from Patch notes); Item changelog (from Patch notes); Recalculated attribute bonuses; Added default wiki data; No longer have to download additional data on first run; User consent for pre-caching images; UI tweaks (eg: disable menu bounce on IOS); Expo SDK upgrade; Various performance enhancements;",
  "1.3.0": "Added translations engine; Available additional languages: French, Romanian;",
  "2.0.0": "Rebranded to Pocket Info for Dota2; Minor layout adjustments;",
  "2.0.1": "Bugfix: Desired language is now loaded by default; Various small fixes;",
  "2.0.2": "Icon change (enlarged background); Optimized all images (reduced app size by 1MB); Added About button on Home screen;",
}
export default class Changelog extends React.PureComponent {
  componentDidMount() {
    this.props.headerBackground(true);
  }
  render() {
    return (
      <MDBContainer className="padtop">
      <p>
        <h2>Changelog</h2>
      <AppName /> version history
      </p>
      {Object.keys(changelogs).sort((a, b) => b.split('.').join('') - a.split('.').join('')).map(log => (
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