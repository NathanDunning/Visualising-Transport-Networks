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
// let extraSauce =
// "https://api.mapbox.com/styles/v1/droptableusers/cjribgf2613sy2slev7f8wvsj/tiles/256/{z}/{x}/{y}?access_token={accessToken}";

let token = 'pk.eyJ1IjoibmV0d29ya2luZyIsImEiOiJjancwNmR4NnMwN3ZiNDVtbW1qOHp5ejcyIn0.LPgE55NBYCKrsP7fdSvjHA#10.69/-41.2348/174.806'
// let hotSauce = "https://api.mapbox.com/styles/v1/networking/cjys46aku08a11co20gnz8pp4.html?fresh=true&title=true&access_token={token}"

// let hotSauce="https://api.mapbox.com/styles/v1/networking/cjys46aku08a11co20gnz8pp4/tiles/256/{z}/{x}/{y}?access_token={accessToken}"

//Colour OpenStreetMap tile layer
// let osmLayer = L.tileLayer(orgURL, {
//   zoom: 10,
//   maxZoom: 18,
//   id: "mapbox.wheatpaste", 
//   accessToken: MAPBOX_KEY
// });

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
  // Colour: osmLayer,
  "Mono-tone": mapboxLayer,
  // "unit area": unitAreaLayer
};

function projectPoint(x, y) {
  let point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}

export function addControlLayers(map, layer) {
  // map.removeControl(baseControl);

  // let layerToAdd = L.layerGroup([layer]);
  // let overlays = {
  //   "Collection Points": layerToAdd
  // };

  // baseControl.addOverlay(layerToAdd, "Collection Points");
  // baseControl.addOverlay(hotSauce, 'Area units');

  // if (extraLayers === null) {
  //   extraLayers = L.control.layers(baseMaps, overlays).addTo(map);
  // }
  // extraLayers.addTo(map);
}



// --------------- temp

// //More info: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
// function handleZipFile(file){
//     var reader = new FileReader();
//   reader.onload = function(){
// 	  if (reader.readyState != 2 || reader.error){
// 		  return;
// 	  } else {
// 		  convertToLayer(reader.result);
//   	}
//   }
//   reader.readAsArrayBuffer(file);
// }

// function convertToLayer(buffer){
// // 	shp(buffer).then(function(geojson){	//More info: https://github.com/calvinmetcalf/shapefile-js
// //     var layer = L.shapefile(geojson).addTo(map);//More info: https://github.com/calvinmetcalf/leaflet.shapefile
// //     console.log(layer);
// //   });
// }

//  ------------------------- tempo


// setView initialises the map to the chosen latLong and zoom level
class Map extends Component {
  componentDidMount() {
    map = L.map(mapid, {
      layers: [mapboxLayer],
      zoom: 10,
      zoomControl: false
    }).setView([-41.2858, 174.78682], 14);
    this.addMask();
    get_city_centres();
    // this.pushMap(map)
    pushMap(map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    baseControl = L.control.layers(baseMaps);
    baseControl.addTo(map);

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
