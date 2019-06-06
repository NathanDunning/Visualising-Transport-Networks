import React, { Component } from "react";
//import About from "./About";

class About extends Component {
  render() {
    return (
      <div className="landing">
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
