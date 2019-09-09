/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import * as d3 from 'd3';
import store from './redux/reduxstore';
import { checkNested } from './nested_objects';
import { pushAllCsv } from './redux/actions';
import time_in_range from './time_in_range';

export const requestSingleCsv = (city, medium, direction, date, time) => d3.csv(`${process.env.PUBLIC_URL}/data/${city}/${medium}/${direction}/${date} ${time}.csv`);

export const requestDate = async (city, medium, direction, date) => {
  const currentState = store.getState();

  const times = currentState.data.available_snapshots[city][medium][direction][date];
  const queries = [];
  // get all times that have not already been downloaded
  for (const time of times) {
    if (!checkNested(currentState.data.data, city, medium, direction, date, time)) {
      queries.push(time);
    }
  }

  const requests = queries.map((time) => requestSingleCsv(city, medium, direction, date, time));
  const data = await Promise.all(requests);

  // store the diff
  store.dispatch(pushAllCsv(
    queries.map((time) => ({
      city,
      medium,
      direction,
      date,
      time,
    })), data,
  ));
};

export const requestHour = async (city, medium, direction, time) => {
  const currentState = store.getState();
  // the set of all days
  const dates = currentState.data.available_snapshots[city][medium][direction];
  const queries = [];

  for (const d in dates) {
    const date = d.split(' ');
    for (const i in dates[date]) {
      const t = dates[date][i];
      if (time_in_range(t, time)
        && !checkNested(currentState.data.data, city, medium, direction, date, t)) {
        const idx = queries.length;
        queries.push(date);
        queries[idx].time = dates[date][i];
      }
    }
  }

  const data = await Promise.all(
    queries.map((dt) => requestSingleCsv(city, medium, direction, dt, dt.time)),
  );
  // store
  store.dispatch(pushAllCsv(
    queries.map((dt) => ({
      city,
      medium,
      direction,
      date: dt,
      time: dt.time,
    })), data,
  ));
};
