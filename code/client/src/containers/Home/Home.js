import React, { Component } from 'react';
import './Home.css';
import Map from '../../components/Map/Map';
import MapNav from '../../components/MapNav/MapNav';
import { MenuBar } from '../MenuBar/MenuBar';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelData: [],
      demographicData: []
    };
  }

  render() {
    return (
      <div className='Home'>
        <MenuBar />
        <Grid
          container
          spacing={0}
          direction='column'
          justify='center'
          style={{ minHeight: '75px' }}
        ></Grid>
        <div id='map'>
          <Map />
        </div>
        <MapNav />
      </div>
    );
  }
}

export default Home;
