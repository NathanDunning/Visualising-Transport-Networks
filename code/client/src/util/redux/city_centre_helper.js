/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import * as d3 from 'd3';
import store from './reduxstore';
import { emptyObject } from '../nested_objects';

export function get_city_centres() {
  if (emptyObject(store.getState().map.map_centres)) {
    d3.json(`${process.env.PUBLIC_URL }/cities.json`)
      .then((data) => {
        store.dispatch({
          type: 'ADD_CITY_CENTRES',
          payload: data,
        });
      });
  }
}
