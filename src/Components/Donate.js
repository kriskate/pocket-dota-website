import React from 'react';
import { Row, Col, } from 'mdbreact'
import { ButtonClipboard } from '../Utils/Utils';
import { Images, URLS } from '../Utils/Assets';

const { 
  image_BTC, image_ETH,
  logo_paypal, logo_bitcoin, logo_ethereum,
} = Images;

export default () => (
  <Row className="py-5">
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
)