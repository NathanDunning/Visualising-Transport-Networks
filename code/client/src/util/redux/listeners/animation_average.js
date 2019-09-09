/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable guard-for-in */
/* eslint-disable camelcase */
import store from '../reduxstore';
import { requestDate, requestHour } from '../../requests';
import { drawInfoBox, generateContours } from '../../generate_contours';
import time_in_range from '../../time_in_range';
import { average_coords } from '../../average_coordinates';

const mapSelectionChanged = (prevState, currentState) => {
  prevState = prevState.data;
  const prevCity = prevState.city;
  const prevTime = prevState.time;
  const prevDir = prevState.direction;
  const prevMedium = prevState.medium;
  const prevMode = prevState.mode;
  const {
    city, time, direction, medium, mode,
  } = currentState.data;
  return !(prevCity === city && prevTime === time && prevDir === direction
        && prevMedium === medium && prevMode === mode);
};

let currentState = {};
let currentAnimation = -1;

export const animationAverageListener = async () => {
  const previousState = currentState;
  currentState = store.getState();
  if (currentState.data.mode !== 'animationAverage') {
    if (currentAnimation !== -1) {
      clearInterval(currentAnimation);
      currentAnimation = -1;
    }
    return;
  }

  const {
    city, direction, medium, time,
  } = currentState.data;

  // If the selection has changed do the animation
  if (mapSelectionChanged(previousState, currentState)) {
    if (currentAnimation !== -1) { clearInterval(currentAnimation); }
    let frames = [];
    let times = [];
    const toPlay = [];
    const toAverage = [];
    let temp;
    let idx = 0;

    await requestHour(city, medium, direction, time);
    currentState = store.getState();

    const dates = currentState.data.data[city][medium][direction];
    for (const date in dates) {
      await requestDate(city, medium, direction, date);
      currentState = store.getState();

      frames = { ...currentState.data.data[city][medium][direction][date], ...frames };
      times = Object.keys(frames).filter((t) => time_in_range(t, time));

      temp = Object.values(currentState.data.data[city][medium][direction])
        .map((x) => Object.keys(x)
          .filter((y) => time_in_range(y, time)));
    }

    for (const date in dates) {
      const allData = currentState.data.data[city][medium][direction][date];
      const elem = [];
      for (const t of temp) {
        for (const e of t) {
          if (allData[e] !== undefined) { elem.push(allData[e]); }
        }
      }
      elem.date = date;
      toAverage.push(elem);
    }

    for (const f in toAverage) {
      const newE = average_coords(toAverage[f]);
      newE.date = toAverage[f].date;
      toPlay.push(newE);
    }

    currentAnimation = setInterval(
      () => {
        if (toPlay[idx] !== undefined) {
          const dateString = new Date(toPlay[idx].date).toString().slice(0, 10);
          drawInfoBox(`Average time taken by ${medium} traffic going ${direction} ${city} 30min either side of ${time} hrs on ${dateString}`);
          generateContours(toPlay[idx]);
        }
        idx++;
        if (idx >= times.length) { idx = 0; }
      }, 500,
    );
  }
};
