import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './App';
import About from './About';
import CounterContainer from './CounterContainer';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ About } />
    <Route path="about" component={ About } />
    <Route path="counter" component={ CounterContainer } />
  </Route>
)
