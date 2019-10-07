import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { withRouter } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
