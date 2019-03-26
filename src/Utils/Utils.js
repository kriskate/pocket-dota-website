import React from 'react';
import { Input } from 'mdbreact';
import ReactDOM from 'react-dom';


export const openURL = (url) => {
  if(url) window.open(url, "_blank");
  else alert('App in Review; Coming soon!');
}


export const copyToClipboard = el => {
  el.select();
  document.execCommand('copy');
  alert(`copied ${el.value} to clipboard!`);
};

export const ButtonClipboard = ({ url, logo, qr, text }) => {
  const width =((url.length+1) * 9) + 'px';

  return (
    <div>
      <img src={logo} alt={text} className='discord' /> [{text}]
      <Input type="text" readOnly value={url} className='wallet' style={{width, fontWeight: 300, textAlign: 'center'}}
          onClick={(e) => copyToClipboard(e.target)} />
      (<a href={qr} target='_blank'>QR code</a>)
    </div>
  )
}

export const scrollTo = (ref) => {
  const domNode = ReactDOM.findDOMNode(this.refs[ref]);
  domNode.scrollIntoView({block: 'start', behavior: 'smooth'});
}