import React from 'react';

export const AppName = ({ noLogo }) => (
  <b>
    { noLogo ? null : <img alt="" src={Images.icon} height="20" style={{ verticalAlign: "top", display: "inline-block" }}/> }
    Pocket Info (Dota2)
  </b>
)

export const Images = {
  icon: require('../images/icon.png'),
  logo: require('../images/logo.png'),
  
  badgeGoogle: require('../images/badges/badge-google-play.png'),
  badgeApple: require('../images/badges/badge-appstore.png'),

  image_home_framed: require('../images/screenshots-android/home_framed.png'),
  image_home: require('../images/screenshots-android/home.png'),
  image_heroes: require('../images/screenshots-android/heroes.png'),

  video_hero: require('../images/screenshots-android/hero.mp4'),
  image_item: require('../images/screenshots-android/items.png'),
  image_items: require('../images/screenshots-android/item.png'),
  image_stats: require('../images/screenshots-android/stats.png'),
  image_stats_profile: require('../images/screenshots-android/stats-profile.png'),

  image_BTC: require('../images/crypto/BTC.png'),
  image_ETH: require('../images/crypto/ETH.png'),

  logo_paypal: require('../images/logos/paypalme.png'),
  logo_discord: require('../images/logos/discord.svg'),
  logo_expo: require('../images/logos/expo.png'),
  logo_bitcoin: require('../images/crypto/logo-bitcoin.jpg'),
  logo_ethereum: require('../images/crypto/logo-ethereum.png'),
}

export const URLS = {
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
