import React, { Component } from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import Map from '../../components/Map/Map';
import MapNav from '../../components/MapNav/MapNav';
import { MenuBar } from '../MenuBar/MenuBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suburbPolygons: { key: 'value' },
      suburbLatLngs: {key: [[0.212, 0.212]]},
      travelData: [],
      demographicData: [],
      locationDuration: {'key':1},
      ldBoolean : 'false',
      resetBoolean: 'false'
    };
  }

  setLocationDuration = (ld, ldBoolean) => {
    this.setState({locationDuration : ld})
    this.setState({ldBoolean : ldBoolean})
  }

  setResetBoolean = (reset) => {
    console.log("Inside home reset")
    this.setState({resetBoolean: reset})
  }

  render() {
    return (
      <div className="BlueBack">
        {/* menu bar */}
        <MenuBar pageName="Home" />

        {/* login form */}
        <div
          className="BlueBack"
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'justify',
          }}
        >
          <Card
            style={{
              padding: '25px',
              width: '1',
            }}
          >
            <div id="map">
              <Map suburbPolygons={this.state.suburbPolygons} suburbLatLngs={this.state.suburbLatLngs} locationDuration={this.state.locationDuration} ldBoolean={this.state.ldBoolean} resetBoolean={this.state.resetBoolean} setLocationDuration={this.setLocationDuration} setResetBoolean={this.setResetBoolean}/>
            </div>
            <MapNav suburbPolygons={this.state.suburbPolygons} suburbLatLngs={this.state.suburbLatLngs} setLocationDuration={this.setLocationDuration} ldBoolean={this.state.ldBoolean} setResetBoolean={this.setResetBoolean}/>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
