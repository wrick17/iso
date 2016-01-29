import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './App';
import About from './About';
import Dashboard from './Dashboard';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Dashboard } />
    <Route path="about" component={ About } />
  </Route>
)