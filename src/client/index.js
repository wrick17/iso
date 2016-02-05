import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../app/routes';
import {Provider} from 'react-redux';
import configureStore from '../app/store/createStore';
import App from '../app/App';

const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>,
    document.getElementById('app')
  );
});
