import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../app/routes';
import Provider from 'react-redux';
import store from '../app/store/createStore';

const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} children={routes}/>,
    </Provider>,
    document.getElementById('app')
  );
});