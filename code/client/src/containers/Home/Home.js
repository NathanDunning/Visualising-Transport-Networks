import React, { Component } from "react";
import "./Home.css";
import Map from "../../components/Map/Map";
import MapNav from "../../components/MapNav/MapNav";
import { MenuBar } from "../MenuBar/MenuBar";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      travelData: [],
      demographicData: []
    }
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <MenuBar />
            <div id="map">
                <h1>Map</h1>
                <p>Visualising our Transport Networks</p>
                <Map />
            </div>
        </div>
        <MapNav />
      </div>
    );
  }
}

export default Home;
