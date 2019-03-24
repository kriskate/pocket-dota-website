import React from 'react';
import { Fa, MDBContainer } from "mdbreact";
import { AppName, URLS } from '../Utils/Assets';
import Donate from '../Components/Donate';

const urls = {
  gh: "https://github.com/kriskate/pocket-dota/",
  ghTrs: "https://github.com/kriskate/pocket-dota/blob/master/README.md#translations",
  ghApp: "https://github.com/kriskate/pocket-dota/blob/master/README.md#app-development",
  crowdin: "https://crowdin.com/project/pocket-dota",
  crowdinODOTA: "https://translate.opendota.com/",
}



export default class Contribute extends React.PureComponent {
  componentDidMount() {
    this.props.headerBackground(true);
  }
  render() {
    return (
      <MDBContainer className="padtop">
        <p>
          <h2>Contributing</h2>
            <p>The app's codebase is available on <a href={urls.gh}>github.</a></p>
            <p>
              <h4>Code</h4>
              <AppName /> is written in React Native (via Expo), so if you're a JavaScript developer, you can easily understand the app's code.<br/>
              For more information regarding a possible contribution the the app's codebase, <a href={urls.ghApp}>go here</a>.
            </p>
            <p>
              <h4>Translations</h4>
              <AppName /> - to help translate the app, <a href={urls.crowdin}>go here</a>.<br/>
              For more information about translations and supported languages, <a href={urls.ghTrs}>go here.</a><br/><br/>
              
              <b>The wiki data</b> = comes from the game files, so the wiki translations are available.<br/>
              <b>The stats section</b> - comes from <a href={URLS["Open Dota"]}>OpenDota</a>. If you encounter any translation problems with this section, <a href={urls.crowdinODOTA}>go here</a>.<br/>
            </p>
            <p>
              <h4>Donations</h4>
              Even though <AppName /> is developed as a hobby, I did spend quite a lot of time developing and designing it well enough for both <Fa icon="apple" /> Apple and <Fa icon="android" /> Google stores, as well as for you to have a better experience while using it.<br/>
              Thus, any financial support would be of great help.<br/>
              It also keeps me motivated to develop even more features.
              <Donate />
            </p>
          </p>
      </MDBContainer>
    )
  }
}