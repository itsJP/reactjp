import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/home';
import services from './components/common/services';
import Portfolio from './components/common/Portfolio';
import About from './components/Pages/About';
import Team from './components/common/Team';
import Contact from './components/Pages/Contact';

class App extends Component {
  render(){
    return (
      <Router>
        <PageWrapper>
          
        <Route
            exact={true}
            path="/services"
            component={services}
            />

            <Route
            exact={true}
            path="/"
            component={Home}
            />

            <Route
            path="/portfolio"
            component={Portfolio}
            />

            <Route
            path="/about"
            component={About}
            />

          <Route 
            path="/team"
            component={Team}
          />

          <Route 
            path="/contact"
            component={Contact}
          />

      </PageWrapper>
      </Router>
    );
  }
}

export default App;