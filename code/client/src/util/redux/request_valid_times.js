/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import * as d3 from 'd3';
import store from './reduxstore';
import { emptyObject } from '../nested_objects';

export function request_times() {
  if (emptyObject(store.getState().data.available_snapshots)) {
    d3.json(`${process.env.PUBLIC_URL }/available.json`)
      .then((d) => {
        store.dispatch({
          type: 'UPDATE_AVAILABILITY',
          payload: d,
        });
      });
  }
}
