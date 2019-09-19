import React, { Component } from 'react';
import { getAllTravelLatLng } from '../../util/_services/PostData';

// import {connect} from 'react-redux'
import L from 'leaflet';
import * as d3 from 'd3';
import 'leaflet/dist/leaflet.css';
import { MAPBOX_KEY } from '../Secrets';
import './Map.css';
import * as topojson from 'topojson-client';
import { get_city_centres } from '../../util/redux/city_centre_helper';
import { pushMap } from '../../util/redux/actions';

const mapid = 'mapid';
let map = null;

let orgURL =
  'https://api.mapbox.com/styles/v1/networking/cjys46aku08a11co20gnz8pp4/tiles/256/{z}/{x}/{y}?access_token={accessToken}';

function projectPoint(x, y) {
  let point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}

// setView initialises the map to the chosen latLong and zoom level
class Map extends Component {
  geocodes = [];

  componentDidMount() {
    // Black and white tile layer
    let mapboxLayer = L.tileLayer(orgURL, {
      zoom: 10,
      maxZoom: 18,
      id: 'mapbox.high-contrast',
      accessToken: MAPBOX_KEY
    });

    map = L.map(mapid, {
      layers: [mapboxLayer]
    }).setView([-41.2858, 174.78682], 14);

    getAllTravelLatLng(localStorage.getItem('auth')).then(data => {
      console.log(data);
      data.map(line => {
        L.circle([line[0], line[1]], {
          // fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 50
        })
          .bindPopup('latitude: ' + line[0] + '\n' + 'longitude: ' + line[1])
          .addTo(map);
      });
    });

    var LeafIcon = L.Icon.extend({
      options: {
        shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      }
    });

    let greenIcon = new LeafIcon({
      iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png'
    })

    let redIcon = new LeafIcon({
      iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-red.png'
    })

    let orangeIcon = new LeafIcon({
      iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-orange.png'
    });

    L.marker([-41.2792099, 174.7781513], {
      icon: greenIcon
    }).bindPopup('Destination: Wellington Train Station').addTo(map);



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
    return <div id={mapid} />;
  }

  addMask = () => {
    d3.json(process.env.PUBLIC_URL + '/newzealand.topo.json').then(topo => {
      let svg = d3.select(
        L.svg({
          attribution: 'New Zealand topology &copy Statistics New Zealand'
        }).addTo(map)._container
      );

      let data = topojson.feature(topo, topo.objects.newzealand);

      let projection = d3.geoTransform({ point: projectPoint });
      let path = d3.geoPath(projection);

      let thingy = svg
        .append('defs')
        .append('clipPath')
        .attr('id', 'nz')
        .append('path')
        .attr('d', path(data));

      map.on('moveend', function () {
        thingy.attr('d', path(data));
      });
    });
  };
}

// const dispatchToProps = (dispatch) => bindActionCreators({pushMap}, dispatch)

// export default connect(null, dispatchToProps)(Map)
export default Map;
