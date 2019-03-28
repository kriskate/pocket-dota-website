import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Support from './Pages/Support';
import Privacy from './Pages/Privacy';
import Contribute from './Pages/Contribute';
import Changelog from './Pages/Changelog';
import Contributions from './Pages/Contributions';
import License from './Pages/License';



class App extends React.Component {
  state = {
    collapse : false,
    applyHeaderBackground: false,
  }

  _headerBackground = (val) => {
    this.setState({ applyHeaderBackground: val });
  }

  render(){
    const { collapse, applyHeaderBackground } = this.state;

    return (
      <Router>
        <div id="apppage">
          <Header applyHeaderBackground={applyHeaderBackground} collapse={collapse} toggleNavbar={() => this.setState({ collapse: !collapse, })} />

          <Route path="/contribute" render={() => <Contribute headerBackground={this._headerBackground} /> }/>
          <Route path="/license" render={() => <License headerBackground={this._headerBackground} /> }/>

          <Route exact path="/" component={Home} />
          <Route path="/contributions" render={() => <Contributions headerBackground={this._headerBackground} /> }/>
          <Route path="/privacy-policy" render={() => <Privacy headerBackground={this._headerBackground} /> }/>
          <Route path="/support" render={() => <Support headerBackground={this._headerBackground} /> }/>
          <Route path="/changelog" render={() => <Changelog headerBackground={this._headerBackground} /> }/>

          <Footer />
        </div>
      </Router>
    );
  }
};

export default App;