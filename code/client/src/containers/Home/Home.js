<<<<<<< Updated upstream
import React, { Component } from "react";
import "./Home.css";
import Map from "../../components/Map/Map";
import MapNav from "../../components/MapNav/MapNav";
import { MenuBar } from "../MenuBar/MenuBar";
=======
import React, { Component } from 'react';
import Map from '../../components/Map/Map';
import MapNav from '../../components/MapNav/MapNav';
import { MenuBar } from '../MenuBar/MenuBar';
>>>>>>> Stashed changes

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelData: [],
      demographicData: [],
    };
  }

  render() {
    return (
<<<<<<< Updated upstream
      <div className="Home">
        <div className="lander">
          <MenuBar />
          <div id="map">
            <h1>Map</h1>
            <p>Visualising our Transport Networks</p>
            <Map />
          </div>
=======
      <div className='Home'>
        <MenuBar pageName='Map' />
        <div id='map'>
          <Map />
>>>>>>> Stashed changes
        </div>
        <MapNav />
      </div>
    );
  }
}

export default Home;
