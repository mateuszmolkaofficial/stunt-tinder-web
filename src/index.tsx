import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';


import ChoicesReducer from './reducers/ChoicesReducer';
import StuntsReducer from './reducers/StuntsReducer';

const combinedReducers = combineReducers({StuntsReducer, ChoicesReducer});
const store = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
