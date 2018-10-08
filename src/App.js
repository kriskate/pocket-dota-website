import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Input, Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, Tooltip } from 'mdbreact';
import './App.css';

import icon from './images/app-icon-no-border.png';

import badgeGoogle from './images/badge-google-play.png';
import badgeApple from './images/badge-appstore.png';

import image_home_framed from './images/screenshots-android/home_framed.png';

import image_home from './images/screenshots-android/home.png';
import image_heroes from './images/screenshots-android/heroes.png';
import video_hero from './images/screenshots-android/hero.mp4';
import image_items from './images/screenshots-android/items.png';
import image_item from './images/screenshots-android/item.png';
import image_stats from './images/screenshots-android/stats.png';
import image_stats_profile from './images/screenshots-android/stats-profile.png';

import image_BTC from './images/crypto/BTC.png';
import image_ETH from './images/crypto/ETH.png';

import Form from './Components/Form';

import logo_paypal from './images/logos/paypalme.png';
import logo_discord from './images/logos/discord.svg';
import logo_expo from './images/logos/expo.png';

import logo_bitcoin from './images/crypto/logo-bitcoin.jpg';
import logo_ethereum from './images/crypto/logo-ethereum.png';


const URLS = {
  'Valve corporation': 'https://www.valvesoftware.com',
  'Elo': 'https://elo.io/',
  'Dota buff': 'https://github.com/dotabuff/d2vpkr',

  'Open Dota': 'https://www.opendota.com',

  'NodeJS': 'https://nodejs.org/en/',

  'React Native': 'https://facebook.github.io/react-native/',
  'Expo': 'https://expo.io/',

  'Feature Requests': 'https://discord.gg/mwP3FRM',
  'Issues': 'https://discord.gg/BMCrMbw',
  'General': 'https://discord.gg/WXjby2w',

  'Paypal': 'https://www.paypal.me/kriskate',


  APP_IOS: "",
  APP_ANDROID: "https://play.google.com/store/apps/details?id=kriskate.pocketdota",
  APP_EXPO: "https://expo.io/@kriskate/pocket-dota",

  BTC: "1DjjyKjsKxJ7jkFVdVaenxHZnS7mtwHq5b",
  ETH: "0xedfbce6a46ca97e0934ba7aaeb97de527fb850ec",
}


const copyToClipboard = el => {
  console.log(el)
  el.select();
  document.execCommand('copy');
  alert(`copied ${el.value} to clipboard!`);
};
const ButtonClipboard = ({ url, logo, qr, text }) => {
  const width =((url.length+1) * 9) + 'px';

  return (
    <div>
      <img src={logo} alt={text} className='discord' /> [{text}]
      <Input type="text" readonly value={url} className='wallet' style={{width, fontWeight: 300, textAlign: 'center'}}
          onClick={(e) => copyToClipboard(e.target)} />
      (<a href={qr} target='_blank'>QR code</a>)
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse : false
    }
  }


  scrollTo = (ref) => {
    const domNode = ReactDOM.findDOMNode(this.refs[ref]);
    domNode.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleNavbarClick = () => {
    this.setState({
      collapse: false
    });
  }

  pressAndroid = () => {
    window.open(URLS.APP_ANDROID, "_blank")
  }
  pressIOS = () => {
    alert('Coming soon!');
  }
  pressExpo = () => {
    window.open(URLS.APP_EXPO, "_blank")
  }

  render(){
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
      <div id="apppage">
        <Router>
          <div>
          <Navbar dark expand="md" fixed="top" scrolling>
            <Container>
              <NavbarBrand style={{color:'white'}}>
                <img alt="logo" src={icon} id="logo" className="img-fluid rounded" /> Pocket Dota
              </NavbarBrand>
              <NavbarToggler onClick = { this.onClick } />
              <Collapse isOpen = {this.state.collapse} navbar>
                {/* <NavbarNav left >
                  <NavItem>
                    <NavLink to="#" onClick={() => this.scrollTo("screenshots")}>
                      Screenshots
                    </NavLink>
                  </NavItem>
                </NavbarNav> */}
                <NavbarNav right >
                  <NavItem>
                    <Tooltip
                        placement="bottom"
                        tooltipContent="Download for Android">
                      <NavLink to="#" onClick={this.pressAndroid}>
                        <Fa icon="android" />
                        <div className="menu-hideable-label">Android</div>
                      </NavLink>
                    </Tooltip>
                  </NavItem>
                  <NavItem>
                    <Tooltip
                        placement="bottom"
                        tooltipContent="Download for IOS">
                      <NavLink to="#" onClick={this.pressIOS}>
                        <Fa icon="apple" />
                        <div className="menu-hideable-label">IOS</div>
                      </NavLink>
                    </Tooltip>
                  </NavItem>
                  <NavItem>
                    <Tooltip
                      placement="bottom"
                      tooltipContent="Download for Expo">
                        <NavLink to="#" onClick={this.pressExpo}>
                          <img alt="expo" className="expo-icon" src={logo_expo} />
                          <div className="menu-hideable-label">Expo</div>
                        </NavLink>
                    </Tooltip>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Container>
          </Navbar>
          { this.state.collapse && overlay}
          </div>
        </Router>
        
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Dota 2 info in your pocket</h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">Pocket Dota is a free app that aims to give players an insight from within the game, when they're unable to access the actual game. 
                  <br/> It can also be used while playing the game, in order to keep track of the heroes and items of the opposing teams.</h6>

                  <Button onClick={this.pressAndroid} color="elegant" className="nopad"><img alt="android" src={badgeGoogle} className="store-badge" /></Button>
                  <Button onClick={this.pressIOS} color="elegant" className="nopad"><img alt="ios" src={badgeApple} className="store-badge" /></Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5 img-main-wrapper">
                  <img alt="home-framed" src={image_home_framed} className="img-fluid img-main" />
                </Col>
                </Row>
              </Container>
            </Mask>
        </View>

        <Container ref={"screenshots"}>
          <Row className="py-5">
            <Col>
              <p className="text-center h4">Screenshots:</p>
            </Col>
            <Row style={{ justifyContent: 'center' }}>
              <img alt="home" src={image_home} className="img-main" />
              <img alt="heroes" src={image_heroes} className="img-main" />
              <video src={video_hero} className="img-main" autoPlay loop muted controls preload="auto"/>
              <img alt="items" src={image_items} className="img-main" />
              <img alt="item" src={image_item} className="img-main" />
              <img alt="stats" src={image_stats} className="img-main" />
              <img alt="profile" src={image_stats_profile} className="img-main" />
            </Row>
          </Row>

          <Row ref={"subscribe"} className="py-5 justify-content-center">
            <Col md="12">
              <Form />
            </Col>
          </Row>

          <Row ref={"chat"} className="py-5">
            <Col md="12" className="text-center">
              <div>
                <p className="h4"><a href={URLS.General} target='_blank'><img alt="discord" className="discord" src={logo_discord}/></a> Let's chat on Discord!</p>
                <p>If you experience any issues while using this app, please use the <a href={URLS["Issues"]}>Issues</a> channel.</p>
                <p>If you would like to see more functionality brought into the app, use the <a href={URLS["Feature Requests"]}>Feature Requests</a> channel.</p>
                <p>If you just wanna have a chat regarding this app, use the <a href={URLS["General"]}>General</a> channel.</p>
              </div>
            </Col>
          </Row>

          <Row ref={"donate"} className="py-5">
            <Col md="12" className="text-center">
              <div>
                <p> If you'd like to show some support, you can donate at:</p>
                <div className=''>
                  <div className='donation-method'>
                    <a href={URLS.Paypal} target='_blank'><img alt="paypal.me" className="discord" src={logo_paypal}/></a><a href={URLS.Paypal} target='_blank'>paypal.me/kriskate</a>
                  </div>
                  <div className="crypto">
                    <div className='donation-method'>
                      <ButtonClipboard url={URLS.BTC} logo={logo_bitcoin} qr={image_BTC} text="BTC" />
                    </div>
                    <div className='donation-method'>
                      <ButtonClipboard url={URLS.ETH} logo={logo_ethereum} qr={image_ETH} text="ETH" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default App;