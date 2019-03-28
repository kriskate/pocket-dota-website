import React from 'react';
import { MDBContainer, MDBRow, MDBMask, MDBView } from "mdbreact";
import { AppName } from '../Utils/Assets';

export default class Changelog extends React.PureComponent {
  state = {
    changes: null,
  }
  async componentDidMount() {
    this.props.headerBackground(true);

    try {
      this.setState({ changes: await (await fetch('./changelog.json')).json() })
    } catch (e) {
      this.setState({ changes: {} })
      alert(`Could not load changelog. \r\n\r\n ${e}`);
    }
  }
  render() {
    const { changes } = this.state;

    return (
      <MDBContainer className="padtop">
        <MDBRow>
          <div>
            <h2>Changelog</h2>
            <p>
              <AppName /> version history
            </p>
          </div>
        </MDBRow>
        <br/>
      { !changes ? <p>Loading...</p>
        :
        Object.keys(changes).length == 0 
        ? <p>Could not load changelog at this time. Please try again later.</p>
        :
        Object.keys(changes)
          .sort((a, b) => b.split('.').join('') - a.split('.').join(''))
          .map(log => (
        <MDBView key={log} className="mb-4" hover>
          <h4>{log}:</h4>
            <ul>
            { changes[log].split(';').map(change => (
              <li key={change}>{change}</li>
            )) }
            </ul>
          <MDBMask overlay="orange-slight" />
        </MDBView>
      ))}

        {/* <img height="300" src={Images.icon} /> */}
      </MDBContainer> 
    )
  }
}