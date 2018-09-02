/* global chrome */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {unregister} from './registerServiceWorker';
unregister();

/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: "Hello from extension to content script!"}, function(response) {
    console.log('Response received by extension: ' + response.message);
  })
});
*/
ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
