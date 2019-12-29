import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TVmazeService from './service/tvmaze-service';
import { TVmazeServiceProvider } from './components/films-service-context';
import App from './components/app';

import store from './store';

const tvmazeServise = new TVmazeService();


ReactDOM.render(
  <Provider store={store}>
    <TVmazeServiceProvider value={tvmazeServise}>
      <App />
    </TVmazeServiceProvider>
  </Provider>,
  document.getElementById('root'));
