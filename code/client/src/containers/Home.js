import React, { Component } from "react";
import "./Home.css";
import Map from "../components/Map/Map";
import MapNav from "../components/MapNav/MapNav";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { getTravelData, getDemographicData } from "../util/_services/PostData";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      travelData: [],
      demographicData: []
    }
  }

  getData(){
    getTravelData("travel", localStorage.getItem('auth'))
    .then(
        data => {
            console.log("Results : " + JSON.stringify(data))
            this.setState({travelData : data})
            });
      getDemographicData("geocode", localStorage.getItem('auth'))
      .then(
        data => {
          console.log("Results : " + JSON.stringify(data))
          this.setState({demographicData : data})
        });
      }

  componentDidMount(){
    this.getData();
  }
  
  render() {
    return (
      <div className="Home">
        <div className="lander">
            <nav className="navbar navbar-right navbar-expand-lg navbar-light bg-light">
              <Link to="/">Map</Link>

              <Nav
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
              >
                <LinkContainer to="/about">
                  <NavItem>About</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Logout</NavItem>
                </LinkContainer>
              </Nav>
            </nav>
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
