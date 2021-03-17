import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import About from '../src/components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from '../src/components/Service';
import Portfolio from '../src/components/Portfolio';
import Testimonial from '../src/components/Testimonial';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/Service' component={Service} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Testimonial' component={Testimonial}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
