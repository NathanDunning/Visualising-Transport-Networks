import React, { Component } from "react";
import {
  getAllTravelLatLng,
} from "../../util/_services/PostData";

// import {connect} from 'react-redux'
import L from "leaflet";
import * as d3 from "d3";
import "leaflet/dist/leaflet.css";
import { MAPBOX_KEY } from "../Secrets";
import "./Map.css";
import * as topojson from "topojson-client";
import { get_city_centres } from "../../util/redux/city_centre_helper";
import { pushMap } from "../../util/redux/actions";
import { jsonResponse } from "./AreaPolygons";

const mapid = "mapid";
let map = null;
let geojson = null;
var info = L.control();
let orgURL =
  "https://api.mapbox.com/styles/v1/networking/cjys46aku08a11co20gnz8pp4/tiles/256/{z}/{x}/{y}?access_token={accessToken}";
function projectPoint(x, y) {
  let point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}
// setView initialises the map to the chosen latLong and zoom level
class Map extends Component {
  suburbPolygons = this.props.suburbPolygons;
  suburbLatLngs = this.props.suburbLatLngs;
  componentDidMount() {
    // Black and white tile layer
    let mapboxLayer = L.tileLayer(orgURL, {
      zoom: 10,
      maxZoom: 18,
      id: "mapbox.high-contrast",
      accessToken: MAPBOX_KEY
    });

    map = L.map(mapid, {
      layers: [mapboxLayer]
    }).setView([-41.2858, 174.78682], 14);

    this.addMask();
    get_city_centres();
    pushMap(map);

    //Give a scale on the bottom left
    L.control
      .scale({
        maxWidth: 400
      })
      .addTo(map);

    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function (map) {
      const div = L.DomUtil.create('div', 'info legend');

      div.innerHTML += "<h5>Duration (minutes)</h5>";
      div.innerHTML += '<i style="background: grey"></i><span>No data</span><br>';
      div.innerHTML += '<i style="background: red"></i><span>40+</span><br>';
      div.innerHTML += '<i style="background: orange"></i><span>25-40</span><br>';
      div.innerHTML += '<i style="background: yellow"></i><span>10-25</span><br>';
      div.innerHTML += '<i style="background: green"></i><span>0-10</span><br>';

      return div;
    };
    legend.addTo(map);

    this.createDemographicUnits();

    this.plotTravelPoints();

    this.createDestinationIcon();

    this.suburbPolygons = this.createSuburbTravelPointJson();

  }

  createDemographicUnits = () => {

    geojson = L.geoJson(jsonResponse, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);

    function style(feature) {
      return {
        color: "darkgreen",
        weight: 2,
        opacity: 1,
        dashArray: 4.5,

        fillColor: "red",
        fillOpacity: 0.04
      };
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        //mouseout: resetHighlight,
        click: zoomToFeature
      });
    }

    function highlightFeature(e) {
      var layer = e.target;
      /*       layer.setStyle({
              dashArray: 0,
              fillOpacity: 0.1
            });
       */
      info.update(layer.feature.properties);
    }

    function resetHighlight(e) {
      geojson.resetStyle(e.target);
      info.update();
    }

    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }

    info.onAdd = function (map) {
      this._div = L.DomUtil.create("div", "info legend");
      this.update();
      return this._div;
    };

    info.update = function (props) {
      this._div.innerHTML =
        "<h4>Demographic Info</h4>" +
        (props
          ? "<b>" + props.name + "</b><br />" + props.population + " people"
          : "Hover over a region");
    };

    info.addTo(map);
  }

  render() {
    if (this.props.resetBoolean === 'true') {
      geojson.eachLayer(function (layer) {
        geojson.resetStyle(layer);
      })
      this.props.setResetBoolean('false');
    }
    if (this.props.resetBoolean === 'false' &&
      this.props.ldBoolean === 'true') {
      var locationDuration = this.props.locationDuration;

      geojson.eachLayer(function (layer) {
        if (locationDuration.hasOwnProperty(layer.feature.properties.name)) {
          var duration = locationDuration[layer.feature.properties.name];
          if (duration <= 10) {
            layer.setStyle({
              fillColor: "green",
              fillOpacity: 0.4
            })
          } else if (duration <= 25) {
            layer.setStyle({
              fillColor: "yellow",
              fillOpacity: 0.4
            })
          } else if (duration <= 40) {
            layer.setStyle({
              fillColor: "orange",
              fillOpacity: 0.4
            })
          } else {
            layer.setStyle({
              fillColor: "red",
              fillOpacity: 0.4
            })
          }
        } else {
          layer.setStyle({
            fillColor: "grey",
            fillOpacity: 0.4
          })
        }
      });
      this.props.setLocationDuration('', 'false');
    }
    return <div id={mapid} />;

  }

  plotTravelPoints = () => {
    getAllTravelLatLng(localStorage.getItem("auth")).then(data => {
      this.latLng = data;
      data.map(line => {
        L.circle([line[0], line[1]], {
          // fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 50
        })
          .bindPopup("latitude: " + line[0] + "\n" + "longitude: " + line[1])
          .addTo(map);
      });
    });
  }

  createDestinationIcon = () => {
    var myIcon = L.icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      iconSize: [32, 50],
      iconAnchor: [6, 49],
      popupAnchor: [9, -30]
    });

    L.marker([-41.2792099, 174.7803], { icon: myIcon })
      .bindPopup("Destination: Wellington Railway Station")
      .addTo(map);
  }

  createSuburbTravelPointJson = () => {
    jsonResponse.features.map(suburb => {

      this.props.suburbPolygons[suburb.properties.name] = suburb.geometry.coordinates[0];
      this.props.suburbPolygons[suburb.properties.name + "_pop"] = suburb.properties.population;

      getAllTravelLatLng(localStorage.getItem("auth")).then(data => {
        data.map(travelPoint => {
          var suburb_name = suburb.properties.name;
          var polygon = L.polygon(suburb.geometry.coordinates[0])
          if (this.isMarkerInsidePolygon(travelPoint, polygon)) {
            var travelPointMatched = [];
            if (this.props.suburbLatLngs.hasOwnProperty(suburb_name + "_latlng")) {
              travelPointMatched = this.props.suburbLatLngs[suburb_name + "_latlng"];
              travelPointMatched.push(travelPoint);
              this.props.suburbLatLngs[suburb_name + "_latlng"] = travelPointMatched;
            } else {
              travelPointMatched.push(travelPoint);
              this.props.suburbLatLngs[suburb_name + "_latlng"] = travelPointMatched;
            }
          }
        });
      });
    });
    return this.props.suburbPolygons;
  }

  isMarkerInsidePolygon = (marker, poly) => {
    var polyPoints = poly.getLatLngs();
    var x = marker[0], y = marker[1];
    var inside = false;

    for (var i = 0, j = polyPoints[0].length - 1; i < polyPoints[0].length; j = i++) {
      var xi = polyPoints[0][i].lng, yi = polyPoints[0][i].lat;
      var xj = polyPoints[0][j].lng, yj = polyPoints[0][j].lat;

      var intersect = ((yi > y) !== (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  };

  /*   render() {
      if (this.props.location != '') {
        var latlngs = [];
        this.suburbPolygons[this.props.location].map(latlngTemp => {
          latlngs.push([latlngTemp[1], latlngTemp[0]])
        })
        var polygon = L.polygon(latlngs, {
          style: style,
          onEachFeature: onEachFeature}.addTo(map);
        // zoom the map to the polygon
        map.fitBounds(polygon.getBounds());  
      }
      return <div id={mapid} />;
    } */

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
      map.on("moveend", function () {
        thingy.attr("d", path(data));
      });
    });
  };
}
// const dispatchToProps = (dispatch) => bindActionCreators({pushMap}, dispatch)
// export default connect(null, dispatchToProps)(Map)
export default Map;

