import React, { Component } from "react";
import "./Home.css";
import Map from "../components/Map";
import MapNav from "../components/MapNav/MapNav";
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Map</h1>
          <p>Visualising our Transport Networks</p>
          <Map />
          <MapNav />
        </div>
      </div>
    );
  }
}

export default Home;
