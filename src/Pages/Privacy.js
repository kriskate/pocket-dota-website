import React from 'react';
import { MDBContainer, } from "mdbreact";
import { AppName } from '../Utils/Assets';

export default class Support extends React.PureComponent {
  componentDidMount() {
    this.props.headerBackground(true);
  }
  render() {
    return (
      <MDBContainer className="padtop">
        <h2>Privacy Policy</h2>
        <p> Cristian Stănescu built <AppName /> as an Open Source app. This SERVICE is provided by Cristian Stănescu at no cost and is intended for use as is.</p>
        <p>This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use <AppName />.</p>
        <p>If you choose to use <AppName />, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the <AppName />. I will not use or share your information with anyone except as described in this Privacy Policy.</p>
        
        <h4>Information Collection and Use</h4>
        <p>For a better experience, while using <AppName />, I may require you to provide us with certain personally identifiable information, including but not limited to your Dota 2 player profile name. The information that I request will be retained on your device and is not collected by me in any way.</p>
        <p>The app does use third party services that may collect information used to identify you.</p> 
        <div>
          <p>Link to privacy policy of third party service providers used by the app</p>
          <ul>
            <li><a href="https://blog.opendota.com/2014/08/01/faq/#what-is-your-privacy-policy" target="_blank" rel="noopener noreferrer">Open Dota</a></li>
          </ul>
        </div> 
        
        <h4>Log Data</h4>
        <p> I want to inform you that whenever you use <AppName />, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.</p> 
        
        <h4>Cookies</h4>
        <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p> 
        <p><AppName /> does not use “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p> 
        
        <h4>Service Providers</h4>
        <p> I may employ third-party companies and individuals due to the following reasons:</p>
        <ul>
          <li>To facilitate my Service;</li>
          <li>To provide the Service on my behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist me in analyzing how my Service is used.</li>
        </ul>
        <p> I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on my behalf. However, they are obligated not to disclose or use the information for any other purpose. </p> 
        
        <h4>Security</h4>
        <p> I value your trust in providing me your Personal Information, thus i am striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security. </p> 
        
        <h4>Links to Other Sites</h4>
        <p>This Service contains links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p> 
        
        <h4>Changes to This Privacy Policy</h4>
        <p> I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p> 
        
      </MDBContainer>
    )
  }
}