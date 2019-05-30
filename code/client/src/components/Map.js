import React, {Component} from 'react'
// import {connect} from 'react-redux'
import L from 'leaflet'
import * as d3 from 'd3'
import 'leaflet/dist/leaflet.css'
import {MAPBOX_KEY} from './Secrets'
import './Map.css'
import * as topojson from 'topojson-client'
import {get_city_centres} from '../util/redux/city_centre_helper'
import {bindActionCreators} from "redux"
import {pushMap} from "../util/redux/actions"

const mapid = 'mapid'
let map = null
let baseControl = null
let extraLayers = null

let orgURL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
let extraSauce = 'https://api.mapbox.com/styles/v1/droptableusers/cjribgf2613sy2slev7f8wvsj/tiles/256/{z}/{x}/{y}?access_token={accessToken}'

//Colour OpenStreetMap tile layer
// let osmLayer = L.tileLayer(orgURL, {
//     zoom : 10,
//     maxZoom: 18,
//     id: 'mapbox.wheatpaste',
//     accessToken: MAPBOX_KEY,
// })

// Black and white tile layer
let mapboxLayer = L.tileLayer(orgURL, {
    zoom : 10,
    maxZoom: 18,
    id: 'mapbox.high-contrast',
    accessToken: MAPBOX_KEY,
})

// Black and white tile layer
// let mapboxCustomLayer = L.tileLayer(extraSauce, {
//     zoom : 10,
//     maxZoom: 18,
//     accessToken: MAPBOX_KEY,
// })

let baseMaps = {
    // "Colour": osmLayer,
    "Mono-tone": mapboxLayer,
    // "Transit": mapboxCustomLayer,
}

function projectPoint(x, y) {
    let point = map.latLngToLayerPoint(new L.LatLng(y, x))
    this.stream.point(point.x, point.y)
}

export function addControlLayers(map, layer){
    map.removeControl(baseControl)

    let layerToAdd = L.layerGroup([layer])
    let overlays = {
        "Collection Points": layerToAdd,
    }

    baseControl.addOverlay(layerToAdd, "Collection Points")

    if (extraLayers===null) {
        extraLayers = L.control.layers(baseMaps, overlays).addTo(map)
    }
    extraLayers.addTo(map)
}

// setView initialises the map to the chosen latLong and zoom level
class Map extends Component {
    componentDidMount() {
        map = L.map(mapid, {
            layers:[mapboxLayer],
            zoom: 10,
            zoomControl:false
        }).setView([-41.2858, 174.78682], 14);
        this.addMask()
        get_city_centres()
        // this.pushMap(map)
        pushMap(map)

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(map)
        baseControl = L.control.layers(baseMaps, )
        baseControl.addTo(map)

        //Give a scale on the bottom left
        L.control.scale({
            maxWidth: 400
        }).addTo(map)
    }

    render() {
        return (
          <div>
              <div id={mapid}></div>
          </div>
        )

    }


    addMask = () => {
        d3.json(process.env.PUBLIC_URL + '/newzealand.topo.json')
            .then(topo => {
                let svg = d3.select(L.svg({
                    attribution: 'New Zealand topology &copy Statistics New Zealand'
                }).addTo(map)._container)

                let data = topojson.feature(topo, topo.objects.newzealand)

                let projection = d3.geoTransform({point: projectPoint})
                let path = d3.geoPath(projection)

                let thingy = svg.append('defs')
                    .append('clipPath')
                    .attr('id', 'nz')
                    .append("path")
                    .attr("d", path(data))

                map.on("moveend", function () {
                    thingy.attr("d", path(data))
                })
            })
    }
}

// const dispatchToProps = (dispatch) => bindActionCreators({pushMap}, dispatch)

// export default connect(null, dispatchToProps)(Map)
export default Map;
