import React from 'react';
import { Fa, NavbarNav, NavItem, NavLink, Tooltip, } from 'mdbreact';

import { URLS, Images } from '../Utils/Assets';
import { openURL } from '../Utils/Utils';



export default () => (
  <NavbarNav right >
    <NavItem>
      <Tooltip placement="bottom" tooltipContent="Download for Android">
        <NavLink to="#" onClick={() => openURL(URLS.APP_ANDROID) }>
          <Fa icon="android" />
          <div className="menu-hideable-label">Android</div>
        </NavLink>
      </Tooltip>
    </NavItem>
    <NavItem>
      <Tooltip placement="bottom" tooltipContent="Download for IOS">
        <NavLink to="#" onClick={() => openURL(URLS.APP_IOS) }>
          <Fa icon="apple" />
          <div className="menu-hideable-label">IOS</div>
        </NavLink>
      </Tooltip>
    </NavItem>
    <NavItem>
      <Tooltip placement="bottom" tooltipContent="Download for Expo">
        <NavLink to="#" onClick={() => openURL(URLS.APP_EXPO) }>
          <img alt="expo" className="expo-icon" src={Images.logo_expo} />
          <div className="menu-hideable-label">Expo</div>
        </NavLink>
      </Tooltip>
    </NavItem>
  </NavbarNav>
)