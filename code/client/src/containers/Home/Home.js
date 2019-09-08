/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import './Home.css';
import Map from '../../components/Map/Map';
import MapNav from '../../components/MapNav/MapNav';
import { getTravelData, getDemographicData } from '../../util/_services/PostData';
import { MenuBar } from '../MenuBar/MenuBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelData: [],
      demographicData: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getTravelData('travel', localStorage.getItem('auth'))
      .then(
        (data) => {
          data.map((item) => {
            this.setState({ travelData: [...this.state.travelData, JSON.stringify(item)] });
          });
          console.log(`Final travel data : ${this.state.travelData}`);
        },
      );

    getDemographicData('geocode', localStorage.getItem('auth'))
      .then(
        (data) => {
          data.map((item) => {
            this.setState(
              { demographicData: [...this.state.demographicData, JSON.stringify(item)] },
            );
          });
          console.log(`Final demographic data : ${this.state.demographicData}`);
        },
      );
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
