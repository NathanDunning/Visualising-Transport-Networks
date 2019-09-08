import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Using BrowserRouter as our router. This uses the browser's History API to create URLs
/* User the Router to render our App component,
   allowing use to create the routes we need inside our App component */
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
