/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import store from '../reduxstore';
import { requestDate, requestHour } from '../../requests';
import { drawErrorBox, drawInfoBox, generateContours } from '../../generate_contours';
import { time_in_X } from '../../time_in_range';
import { average_coords } from '../../average_coordinates';

const mapSelectionChanged = (prevState, currentState) => {
  prevState = prevState.data;
  const prevCity = prevState.city;
  const prevDate = prevState.date;
  const prevTime = prevState.time;
  const prevT2 = prevState.t2;
  const prevDir = prevState.direction;
  const prevMedium = prevState.medium;
  const prevMode = prevState.mode;
  const {
    city, date, time, direction, medium, mode, t2,
  } = currentState.data;
  return !(
    prevCity === city && prevDate === date && prevTime === time
    && prevT2 === t2 && prevDir === direction
        && prevMedium === medium && prevMode === mode);
};

let currentState = {};
let currentAnimation = -1;

export const animationAverageTListener = async () => {
  const previousState = currentState;
  currentState = store.getState();
  if (currentState.data.mode !== 'animationAverageT') {
    if (currentAnimation !== -1) {
      clearInterval(currentAnimation);
      currentAnimation = -1;
    }
    return;
  }

  const {
    city, direction, medium, time, t2,
  } = currentState.data;

  // If the selection has changed do the animation
  Loop1:
  if (mapSelectionChanged(previousState, currentState)) {
    if (currentAnimation !== -1) { clearInterval(currentAnimation); }
    const toPlay = [];
    const toAverage = [];
    let temp;
    let idx = 0;

    await requestHour(city, medium, direction, time);
    currentState = store.getState();

    if (t2 === '') {
      // TODO: throw some errors
      drawErrorBox('Error: No end time selected.');
      break Loop1;
    } else if (t2 < time) {
      drawErrorBox('Error: End must be before start');
      break Loop1;
    } else {
      drawErrorBox();
    }

    const dates = currentState.data.data[city][medium][direction];
    for (const date in dates) {
      await requestDate(city, medium, direction, date);
      const frames = { ...currentState.data.data[city][medium][direction][date] };
      const times = Object.keys(frames).filter((t) => time_in_X(time, t, t2));

      temp = Object.values(currentState.data.data[city][medium][direction])
        .map((x) => Object.keys(x)
          .filter((y) => time_in_X(time, y, t2)));
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

    console.log(toPlay);

    currentAnimation = setInterval(
      () => {
        if (toPlay[idx] !== undefined) {
          const dateString = new Date(toPlay[idx].date).toString().slice(0, 10);
          drawInfoBox(`Average time taken by ${medium} traffic going ${direction} ${city} on ${dateString} from ${time} to ${t2}.`);
          generateContours(toPlay[idx]);
        }
        idx++;
        if (idx >= toPlay.length) { idx = 0; }
      }, 500,
    );
  }
};
