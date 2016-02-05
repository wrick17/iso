import express from 'express';
import path from 'path';
import superagent from 'superagent';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from '../app/routes';
import React from 'react';
import { renderToString } from 'react-dom/server';
import configureStore from '../app/store/createStore';
import { Provider } from 'react-redux';

const app = express();

app.use(express.static(path.join('./')));

app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.get('/*', function(req, res) {

  const location = createLocation(req.url);

  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = configureStore();
      var content = renderToString(
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );
      return res.status(200).render('index', {
        html: content
      });
    } else {
      res.status(404).send('Not found');
    }
  });

});

const server = app.listen(process.env.PORT || 4000, function() {

  const host = server.address().address;
  const port = server.address().port;

  console.log('client server started at port ', host, port);
});
