import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import stuntsReducer from './reducers/stuntsReducer';

const store = createStore(stuntsReducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
