import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Images } from './Utils/Assets';
import Header from './Components/Header';
import Home from './Pages/Home';
import Support from './Pages/Support';
import Footer from './Components/Footer';
import Privacy from './Pages/Privacy';



class App extends React.Component {
  state = {
    collapse : false,
  }

  render(){
    const { collapse } = this.state;

    return (
      <Router>
        <div id="apppage">
          <Header collapse={collapse} toggleNavbar={() => this.setState({ collapse: !collapse, })} />

          <Route exact path="/" component={Home} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/support" component={Support} />

          
          <Footer />
        </div>
      </Router>
    );
  }
};

export default App;