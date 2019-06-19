import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import store from './store';
import App from './components/App';

import 'typeface-roboto';
import './index.scss';


const sampleData = {
  decisions: [{
    id: 1,
    text: 'What should I eat today?'
  },{
    id: 2,
    text: 'Where shall we live?'
  }],
}

// define initial state
const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData;

// create store
const appStore = store(initialState);

// listen to state changes
appStore.subscribe(() => localStorage["redux-store"] = JSON.stringify(appStore.getState()));

// Render app
ReactDOM.render(
  <Provider
    store={appStore}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);


// Some exports for the console 
window.React = React;
window.store = appStore;
