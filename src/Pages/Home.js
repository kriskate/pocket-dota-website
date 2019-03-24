import React from 'react';
import { Mask, Row, Col, Button, View, Container, } from 'mdbreact';


import { Images, URLS, AppName } from '../Utils/Assets';
import Donate from '../Components/Donate';

const {   
  badgeGoogle, badgeApple,
  image_home_framed,
  image_home, image_heroes, video_hero, image_item, image_items, image_stats, image_stats_profile,
  logo_discord,
} = Images;


export default class Home extends React.Component{

  render() {
    return (
      <div className="padtop2">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Dota 2 info in your pocket</h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4"><AppName /> is a free app that aims to give players an insight from within the game, when they're unable to access the actual game. <br/> 
                  It can also be used while playing the game, in order to keep track of the heroes and items of the opposing teams.</h6>

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

          {/* <Row ref={"subscribe"} className="py-5 justify-content-center">
            <Col md="12">
              <Form />
            </Col>
          </Row> */}

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


          <Donate />

        </Container>
      </div>
    )
  }
}