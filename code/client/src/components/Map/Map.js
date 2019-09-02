import React, { Component } from "react";
// import {connect} from 'react-redux'
import L from "leaflet";
import * as d3 from "d3";
import "leaflet/dist/leaflet.css";
import { MAPBOX_KEY } from "../Secrets";
import "./Map.css";
import * as topojson from "topojson-client";
import { get_city_centres } from "../../util/redux/city_centre_helper";
import { bindActionCreators } from "redux";
import { pushMap } from "../../util/redux/actions";

const mapid = "mapid";
let map = null;
let baseControl = null;
let extraLayers = null;

let orgURL =
"https://api.mapbox.com/styles/v1/networking/cjys46aku08a11co20gnz8pp4/tiles/256/{z}/{x}/{y}?access_token={accessToken}";

let token = 'pk.eyJ1IjoibmV0d29ya2luZyIsImEiOiJjancwNmR4NnMwN3ZiNDVtbW1qOHp5ejcyIn0.LPgE55NBYCKrsP7fdSvjHA#10.69/-41.2348/174.806'

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

// let unitAreaLayer = L.tileLayer(hotSauce);

let baseMaps = {
  Transit: mapboxCustomLayer,
  "Mono-tone": mapboxLayer,
};

function projectPoint(x, y) {
  let point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}


// setView initialises the map to the chosen latLong and zoom level
class Map extends Component {

  data = [
    [-41.283031, 174.771004],
[-41.286901,	174.773237],
[-41.275388,	174.772378],
[-41.282902,	174.760791],
[-41.296066,	174.776434],
[-41.288417,	174.764653],
[-41.292637,	174.786935],
[-41.297614,	174.787135],
[-41.291374,	174.794803],
[-41.26471	 ,174.781603],
[-41.27542	  ,174.76255],
[-41.289481, 	174.75813],
[-41.281322,	174.751049],
[-41.262098,	174.771132],
[-41.269324,	174.755727],
[-41.295704,	174.766499],
[-41.292577,	174.758859],
[-41.289274,	174.802318],
[-41.302029,	174.773721],
[-41.282153,	174.73967],
[-41.30436	,174.777654],
[-41.306631,	174.763274],
[-41.293995,	174.745244],
[-41.250606,	174.774322],
[-41.304154,	174.794271],
[-41.288732,	 174.72348],
[-41.315654,	174.769062],
[-41.254657,	174.764082],
[-41.25122	, 174.794796],
[-41.298913,	174.803242],
[-41.313123,	174.783613],
[-41.332269,	174.782759],
[-41.319761,	174.798538],
[-41.317875,	174.818772],
[-41.220619,	174.807044],
[-41.340982,	174.785529],
[-41.302651,	174.820633],
[-41.345142,	174.768771],
[-41.325314,	174.832745],
[-41.213739,	174.869182],
[-41.215958,	174.894373],
[-41.178922,	174.821848],
[-41.215184,	174.926403],
[-41.15544	,  174.83548],
[-41.262277,	174.947742],
[-41.129259,	174.832848],
[-41.155545,	174.978026],
[-41.072184,	174.860037],
[-41.14532	,  175.03054]
];
  componentDidMount() {
    map = L.map(mapid, {
      layers: [mapboxLayer],
      zoom: 10,
      zoomControl: false
    }).setView([-41.2858, 174.78682], 14);
    
    this.data.forEach(point => {
      L.circle(point, {
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 200
      })
      .bindPopup(point.toString())
      .addTo(map);
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

      L.marker([-41.250606,	174.774322]).addTo(map);
      let data = topojson.feature(topo, topo.objects.newzealand);

      let projection = d3.geoTransform({ point: projectPoint });
      let path = d3.geoPath(projection);

      let thingy = svg
        .append("defs")
        .append("clipPath")
        .attr("id", "nz")
        .append("path")
        .attr("d", path(data));

      map.on("moveend", function() {
        thingy.attr("d", path(data));
      });
    });
  };
}

// const dispatchToProps = (dispatch) => bindActionCreators({pushMap}, dispatch)
 
// export default connect(null, dispatchToProps)(Map)
export default Map;
