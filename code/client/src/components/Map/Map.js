import React, { Component } from "react";
import { getDemographicData } from "../../util/_services/PostData";

// import {connect} from 'react-redux'
import L from "leaflet";
import * as d3 from "d3";
import "leaflet/dist/leaflet.css";
import { MAPBOX_KEY } from "../Secrets";
import "./Map.css";
import * as topojson from "topojson-client";
import { get_city_centres } from "../../util/redux/city_centre_helper";
import { pushMap } from "../../util/redux/actions";
import { array } from "prop-types";

const mapid = "mapid";
let map = null;

let orgURL =
  "https://api.mapbox.com/styles/v1/networking/cjys46aku08a11co20gnz8pp4/tiles/256/{z}/{x}/{y}?access_token={accessToken}";


// Black and white tile layer
let mapboxLayer = L.tileLayer(orgURL, {
  zoom: 10,
  maxZoom: 18,
  id: "mapbox.high-contrast",
  accessToken: MAPBOX_KEY,
});


// transit tile layer
let mapboxCustomLayer = L.tileLayer(orgURL, {
  zoom: 10,
  maxZoom: 18,
  accessToken: MAPBOX_KEY
});


function projectPoint(x, y) {
  let point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}


// setView initialises the map to the chosen latLong and zoom level
class Map extends Component {

    geocodes=[]


  componentDidMount() {

    map = L.map(mapid, {
      layers: [mapboxLayer],
      zoom: 10,
      zoomControl: false
    }).setView([-41.2858, 174.78682], 14);

    getDemographicData("demographic", localStorage.getItem('auth'))
      .then(data => {
        console.log(data)
        data.map(line => {
          L.circle([line.latitude, line.longitude], {
            // fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50
          })
            .bindPopup('coordinates: ' + line.areaName + '\n' +'population: ' + line.population)
            .addTo(map);
        })
      });

    this.addMask();
    get_city_centres();
    pushMap(map);
    //Give a scale on the bottom left
    L.control
      .scale({
        maxWidth: 400
      })
      .addTo(map);
  }

  render() {

    // handleZipFile(this.file)http://jsfiddle.net/spytqamw/
    return (
      <div>
        <div id={mapid} />
        <label for="input">Select a zipped shapefile:</label>
        <input type="file" id="file"></input>
        <input type="submit" id="submit"></input>
      </div>
    );
  }

  addMask = () => {
    d3.json(process.env.PUBLIC_URL + "/newzealand.topo.json").then(topo => {
      let svg = d3.select(
        L.svg({
          attribution: "New Zealand topology &copy Statistics New Zealand"
        }).addTo(map)._container
      );

      L.marker([-41.250606, 174.774322]).addTo(map);
      let data = topojson.feature(topo, topo.objects.newzealand);

      let projection = d3.geoTransform({ point: projectPoint });
      let path = d3.geoPath(projection);

      let thingy = svg
        .append("defs")
        .append("clipPath")
        .attr("id", "nz")
        .append("path")
        .attr("d", path(data));

      map.on("moveend", function () {
        thingy.attr("d", path(data));
      });
    });
  };
}

// const dispatchToProps = (dispatch) => bindActionCreators({pushMap}, dispatch)

// export default connect(null, dispatchToProps)(Map)
export default Map;

