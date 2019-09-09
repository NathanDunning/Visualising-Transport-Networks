/* eslint-disable no-plusplus */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import store from '../reduxstore';
import { requestDate } from '../../requests';
import { drawErrorBox, drawInfoBox, generateContours } from '../../generate_contours';

const mapSelectionChanged = (prevState, currentState) => {
  prevState = prevState.data;
  const prevCity = prevState.city;
  const prevDate = prevState.date;
  const prevDir = prevState.direction;
  const prevMedium = prevState.medium;
  const prevTime = prevState.time;
  const prevTime2 = prevState.t2;
  const prevMode = prevState.mode;
  const prevPause = prevState.pause;
  const {
    city, date, direction, medium, mode, time, t2, pause,
  } = currentState.data;
  return !(prevCity === city && prevDate === date && prevTime2 === t2 && prevTime === time && prevDir === direction
        && prevMedium === medium && prevMode === mode && prevPause === pause);
};

let currentState = {};
let currentAnimation = -1;

export const animationListener = async () => {
  const previousState = currentState;
  currentState = store.getState();
  if (currentState.data.mode !== 'animation') {
    if (currentAnimation !== -1) {
      clearInterval(currentAnimation);
      currentAnimation = -1;
    }
    return;
  }

  const {
    city, date, direction, medium, time, t2,
  } = currentState.data;

  // If the selection has changed do the animation
  Loop1:
  if (mapSelectionChanged(previousState, currentState)) {
    if (currentAnimation !== -1) { clearInterval(currentAnimation); }
    await requestDate(city, medium, direction, date);
    currentState = store.getState();
    const frames = currentState.data.data[city][medium][direction][date];
    const times = Object.keys(frames);
    const temp = [];
    let idx = 0;

    for (const t in times) {
      if (+times[t] >= +time && +times[t] <= +t2) {
        temp.push(times[t]);
      }
    }

    console.log(t2);

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

    currentAnimation = setInterval(
      () => {
        drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} at ${temp[idx]} on ${date}`);
        generateContours(frames[temp[idx]]);
        idx++;
        if (idx >= temp.length) { idx = 0; }
      },
      500,
    );
  }
};
