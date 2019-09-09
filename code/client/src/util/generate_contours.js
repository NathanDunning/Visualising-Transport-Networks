/* eslint-disable new-cap */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable no-multi-assign */
/* eslint-disable radix */
/* eslint-disable max-len */
import * as d3 from 'd3';
import * as turf from '@turf/turf';
import '@turf/interpolate';
import L from 'leaflet';
// import { distance } from '@turf/turf';
// import { clone } from '@turf/turf';
import { addControlLayers } from '../components/map';
import { colourGradient } from './colour_gradients';
import store from './redux/reduxstore';
import 'leaflet-range/L.Control.Range.css';

/**
 * parse the isoband description into its upper limit
 * Input: "number-number" (as a string)
 * Output: number (as an int)
 */
const parseIsobandLimit = (str) => parseIsoband(str)[1];

const parseIsoband = (str) => /(\d+)-(\d+)/.exec(str).splice(1, 2).map((x) => parseInt(x));

const isobandToGradient = (geo) => colourGradient(parseIsobandLimit(geo.properties.drivetime) / STEPS, UPPER_LIMIT / STEPS, COLOURS);

// Isochrone vars
let UPPER_LIMIT = 7200;
const LOWER_LIMIT = 0;
let STEPS = 120;
let COLOURS = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

// Map display vars
let svg; let legend1; let
  map;
svg = legend1 = map = null;

// Map UI vars
let UPPER_LIMIT_Slider = null;
let STEPS_Slider = null;
let settingsButton = null;
let errorbox;

// Used to auto-redraw isochrones on scale change
let copy = null;

function projectPoint(x, y) {
  const point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}

const pointStyle = {
  pointToLayer(feature, latlng) {
    return L.circle(latlng);
  },
  style: {
    color: '#ff7800',
    weight: 5,
    opacity: 0.65,
  },
};

function getColor(d) {
  return d > 50 ? '#800026'
    : d > 30 ? '#BD0026'
      : d > 25 ? '#E31A1C'
        : d > 20 ? '#FC4E2A'
          : d > 15 ? '#FD8D3C'
            : d > 10 ? '#FEB24C'
              : d > 5 ? '#FED976'
                : '#FFEDA0';
}

const collectionPoints = {
  style: function style(feature) {
    return {
      fillColor: getColor(feature.properties.drivetime),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 1,
    };
  },
};

export const generateContours = (data) => {
  map = store.getState().map.map;
  const currentState = store.getState().data;
  copy = data;

  // convert to GeoJSON
  data = data.map((row) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [parseFloat(row.lng), parseFloat(row.lat)],
    },
    properties: {
      drivetime: +row.duration,
    },
  }));

  addCollectionPoints(turf.featureCollection(data), map);

  const centres = store.getState().map.map_centres;
  const op = centres[store.getState().data.city];

  const origin = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [parseFloat(op[1]), parseFloat(op[0])],
    },
    properties: {
      drivetime: 0,
    },
  };

  data.push(origin);

  data = turf.featureCollection(data);

  // let g2 = myInterpolate(data);
  // console.log(g2);

  const grid = turf.interpolate(data, 0.05, {
    gridType: 'point',
    property: 'drivetime',
    units: 'degrees',
    weight: 1,
  });

  // for ()

  const isobands = turf.isobands(grid, d3.range(LOWER_LIMIT, UPPER_LIMIT, STEPS), {
    zProperty: 'drivetime',
  });

  if (svg === null) {
    svg = d3.select(L.svg({
      // attribution: '&copy; Beca 2018',
      clickable: true,
    }).addTo(map)._container);
    svg.attr('pointer-events', 'auto');
  } else {
    svg.selectAll('*').remove();
  }

  const projection = d3.geoTransform({ point: projectPoint });
  const path = d3.geoPath(projection);

  const isochrone = getIsochroneType(isobands, path);

  isochrone.append('title')
    .text((d) => `${parseIsoband(d.properties.drivetime).map((x) => x / 60).join(' - ')} minutes`);

  // TODO: Add logic to make origins show correctly
  // let centres = store.getState().map.map_centres;
  // let features = [];
  //
  // let collection = {};
  //
  // for (let c in centres) {
  //     let i = centres[c][0];
  //     let elem = {};
  //     if(centres[c][0]>centres[c][1])
  //         elem = turf.point(centres[c].reverse());
  //     else
  //         elem = turf.point(centres[c]);
  //     features.push(elem);
  // }
  //
  // collection = turf.featureCollection(features);
  //
  // let originPoints = svg
  //     .append('path')
  //     .attr('d', path(collection))
  //     .attr('stroke', 'black')
  //     .attr('fill', 'blue');


  map.on('moveend', () => {
    isochrone.attr('d', path);
    // originPoints.attr('d', path(collection))
  });

  // addCollectionPoints(data,map);

  // Setup the extra map elements
  addStepsSlider();
  addUpperLimitSlider();
  createLegends(map, isobands, UPPER_LIMIT, STEPS);
  addSettingsButton();
};

function myInterpolate(data) {
  const options = {
    gridType: 'point',
    property: 'drivetime',
    units: 'degrees',
    weight: 1,
  };

  const centres = store.getState().map.map_centres;
  const op = centres[store.getState().data.city];

  console.log(op);

  // data.toArray(data);

  const tin = turf.tin(data, 'drivetime');

  console.log(tin);
  const f = tin.features;
  // let grid = pointGrid(tin, 0.01, options);

  const results = [];
  turf.featureEach(f, (gridFeature) => {
    let zw = 0;
    const sw = 40;
    console.log(gridFeature);
    // calculate distance from each input point to the grid points
    turf.featureEach(data, (point) => {
      const gridPoint = gridFeature;
      console.log(gridFeature);
      const d = distance(op, gridPoint, options);
      const zVal = point.properties.drivetime;
      console.log(d, zVal);

      const d2 = distance(op, point, options);

      if (d === 0) {
        (zw = +zVal);
      }

      zw += (zVal / d) * d2;
    });
    zw = zw;
    // write to points
    const newFeature = clone(gridFeature);
    console.log(zw);
    newFeature.properties.drivetime = zw;
    results.push(newFeature);
  });
  console.log(results);
  return turf.featureCollection(results);
}

/**
 * Add the points of collection to the map as a layer.
 * @param collection A turf featureCollection of latlng points with z values
 * @param map
 */

function addCollectionPoints(collection, map) {
  // ignoreTheEmptyYaTwat.length = 40;
  // console.log(ignoreTheEmptyYaTwat);
  //
  console.log(collection);
  const points = L.geoJson(collection, pointStyle);
  addControlLayers(map, points);
}

/**
 * Get the type and style of isochrone to draw. Using stroke the outline of the isochrones
 * can be manipulated. Using the fill value the colour fill of the isochrones can be changed.
 * @param isobands
 * @param path
 * @returns {Selection<BaseType, any, PElement, PDatum>}
 */

function getIsochroneType(isobands, path) {
  return svg
    .selectAll('path')
    .data(isobands.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('stroke', 'black')
    .attr('fill', isobandToGradient)
    .attr('fill-opacity', 0.5)
    .style('clip-path', 'url(#nz)')
    .on('mouseover', (_, idx, paths) => d3.select(paths[idx]).transition()
      .style('fill', 'white')
      .style('stroke', 'white'))
    .on('mouseout', (o, idx, paths) => d3.select(paths[idx]).transition()
      .style('fill', isobandToGradient(o))
      .style('stroke', 'black'));
}

/**
 * Draw the legend to the right. Redraws every time the upper limit or steps change.
 * Displays the current upper limit and step size as well.
 * @param map
 * @param isobands
 * @param max The current UPPER_LIMIT
 * @param interval The current STEPS
 */

function createLegends(map, isobands, max, interval) {
  if (!(legend1 === null)) { map.removeControl(legend1); }

  legend1 = L.control({
    clickable: true,
    position: 'topright',
  });

  legend1.onAdd = () => {
    const parent = L.DomUtil.create('div', 'legend-container');
    d3.select(parent).append('p');
    const div = L.DomUtil.create('div', 'legend', parent);
    const len = isobands.features.length;
    const divs = d3.select(div)
      .selectAll('div')
      .data(d3.range(0, len).reverse())
      .enter()
      .append('div');
    d3.select(parent).append('p')
      .style('display', 'inline')
      .text(`Upper Lim: ${+max / 60} mins`);
    d3.select(parent).append('br');
    d3.select(parent).append('p')
      .style('display', 'inline')
      .text(`Interval: ${+interval / 60} mins`);


    divs.append('i')
      .style('background', (grade) => colourGradient(grade, len, COLOURS));
    divs.append('p')
      .style('display', 'inline')
      .text((g) => `< ${Math.ceil(g * STEPS / 60)} mins`);
    return parent;
  };
  legend1.addTo(map);
}

let infobox;
export const drawInfoBox = (text) => {
  if (infobox === undefined) {
    const legend = L.control({ position: 'topleft' });
    legend.onAdd = () => {
      infobox = L.DomUtil.create('div', 'info');
      return infobox;
    };
    legend.addTo(store.getState().map.map);
  }
  d3.select(infobox)
    .text(text);
};

/**
 * Draw an error box with some text to the user
 * @param text
 */
export const drawErrorBox = (text) => {
  if (text === undefined && !(errorbox === undefined)) {
    errorbox.remove(map);
  } else {
    if (errorbox === undefined) {
      const elem = L.control({ position: 'bottomleft' });
      elem.onAdd = () => {
        errorbox = L.DomUtil.create('div', 'error');
        return errorbox;
      };
      elem.addTo(store.getState().map.map);
    }
    d3.select(errorbox)
      .text(text);
  }
  errorbox.remove(map);
};

/**
 * Add the STEPS Slider. Change the min/max for different ranges.
 * |(min-max)|/step = integer, must hold to draw contours
 */

export const addStepsSlider = () => {
  const customSlider = L.control.range({
    position: 'bottomright',
    min: 60,
    max: 240,
    value: 120,
    step: 60,
    orient: 'horizontal',
    iconClass: 'leaflet-range-icon',
    icon: true,
  });

  customSlider.on('input change', (e) => {
    console.log(e.value);
    if (+e.value === 180) {
      STEPS = 240;
    } else {
      STEPS = e.value;
      generateContours(copy);
    }
  });

  if (STEPS_Slider === null) {
    map.addControl(customSlider);
    STEPS_Slider = customSlider;
  }
};

/**
 * Add the UPPER_LIMIT Slider. Change the min/max for different ranges.
 * |(min-max)|/step = integer, must hold to draw contours
 */

export const addUpperLimitSlider = () => {
  const customSlider = L.control.range({
    position: 'bottomright',
    min: 1680,
    max: 7200,
    value: 7200,
    step: 240,
    orient: 'horizontal',
    iconClass: 'leaflet-range-icon',
    icon: true,
  });

  customSlider.on('input change', (e) => {
    UPPER_LIMIT = e.value;
    generateContours(copy);
  });

  if (UPPER_LIMIT_Slider === null) {
    map.addControl(customSlider);
    UPPER_LIMIT_Slider = customSlider;
  }
};

/**
 * Add the toggle settings button in the corner.
 * Hides control sliders and legend.
 */

export const addSettingsButton = () => {
  let hide = true;
  const customButton = L.Control.extend({
    clickable: true,
    options: { position: 'bottomleft' },
    onAdd(map) {
      const container = L.DomUtil.create('input');

      container.type = 'button';
      container.title = 'Settings';
      container.value = 'T';
      container.style.backgroundColor = 'white';
      container.style.width = '30px';
      container.style.height = '30px';

      container.onclick = function () {
        if (hide) {
          map.removeControl(UPPER_LIMIT_Slider);
          map.removeControl(STEPS_Slider);
          // map.removeControl(legend1);
          hide = false;
        } else {
          map.addControl(STEPS_Slider);
          map.addControl(UPPER_LIMIT_Slider);
          // map.addControl(legend1);
          hide = true;
        }
      };
      return container;
    },
  });

  if (settingsButton === null) {
    map.addControl(new customButton());
    settingsButton = customButton;
  }
};
