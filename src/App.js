import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './components/pages/Service';
import Portfolio from './components/pages/Portfolio';
import Testimonial from './components/pages/Testimonial';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/Service' component={Service} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Testimonial' component={Testimonial} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
