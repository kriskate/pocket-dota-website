import React from 'react';
import { Fa, NavbarNav, NavItem, NavLink, Tooltip, } from 'mdbreact';

import { URLS, Images } from '../Utils/Assets';

const Open = {
  Android: () => {
    window.open(URLS.APP_ANDROID, "_blank")
  },
  IOS: () => {
    alert('Coming soon!');
  },
  Expo: () => {
    window.open(URLS.APP_EXPO, "_blank")
  },
}
export default () => (
  <NavbarNav right >
    <NavItem>
      <Tooltip placement="bottom" tooltipContent="Download for Android">
        <NavLink to="#" onClick={Open.Android}>
          <Fa icon="android" />
          <div className="menu-hideable-label">Android</div>
        </NavLink>
      </Tooltip>
    </NavItem>
    <NavItem>
      <Tooltip placement="bottom" tooltipContent="Download for IOS">
        <NavLink to="#" onClick={Open.IOS}>
          <Fa icon="apple" />
          <div className="menu-hideable-label">IOS</div>
        </NavLink>
      </Tooltip>
    </NavItem>
    <NavItem>
      <Tooltip placement="bottom" tooltipContent="Download for Expo">
        <NavLink to="#" onClick={Open.Expo}>
          <img alt="expo" className="expo-icon" src={Images.logo_expo} />
          <div className="menu-hideable-label">Expo</div>
        </NavLink>
      </Tooltip>
    </NavItem>
  </NavbarNav>
)