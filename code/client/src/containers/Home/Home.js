import React, { Component } from 'react';
import './Home.css';
import Map from '../../components/Map/Map';
import MapNav from '../../components/MapNav/MapNav';
import { MenuBar } from '../MenuBar/MenuBar';
import Card from '@material-ui/core/Card';

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
      <div className='BlueBack'>
        {/* menu bar */}
        <MenuBar pageName='Home' />

        {/* login form */}
        <div
          className='BlueBack'
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'justify'
          }}>
          <Card
            style={{
              padding: '25px',
              width: '1'
            }}>
            <div id='map'>
              <Map />
            </div>
            <MapNav />
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
