import React, { Component } from 'react';
import { MenuBar } from '../MenuBar/MenuBar';
import Grid from '@material-ui/core/Grid';

class About extends Component {
  render() {
    return (
      <div className='App'>
        <MenuBar pageName='About' />
        <Grid
          container
          spacing={0}
          direction='column'
          justify='center'
          style={{ minHeight: '75px' }}
        ></Grid>
        <h1>About</h1>
        <p>
          The purpose of this system is to analyse different modes of transport
          (car, bus, train) and the current state of traffic flow on major city
          networks (Wellington, Christchurch and Auckland) in New Zealand.
        </p>
      </div>
    );
  }
}

export default About;
