import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    {/* <Route path="/navigation" component={Navigation} /> */}
  </div>
);

export default App;
