/* eslint-disable import/prefer-default-export */
import store from '../reduxstore';
import { checkNested } from '../../nested_objects';
import { drawInfoBox, generateContours } from '../../generate_contours';
import { pushCsv } from '../actions';
import { requestSingleCsv } from '../../requests';

const mapSelectionChanged = (prevState, currentState) => {
  prevState = prevState.data;
  const prevCity = prevState.city;
  const prevDate = prevState.date;
  const prevTime = prevState.time;
  const prevDir = prevState.direction;
  const prevMedium = prevState.medium;
  const prevMode = prevState.mode;
  const {
    city, date, time, direction, medium, mode,
  } = currentState.data;
  return !(prevCity === city && prevDate === date && prevTime === time
        && prevDir === direction && prevMedium === medium && prevMode === mode);
};

let currentState = null;

export const generateContoursHandler = () => {
  const lastState = currentState;
  currentState = store.getState();
  if (currentState.data.mode !== 'snapshot') { return; }
  const {
    city, medium, direction, date, time,
  } = currentState.data;
  const { map } = currentState.map;

  if (map === null || city === null) { return; }
  if (!checkNested(currentState.data.data, city, medium, direction, date, time)) {
    requestSingleCsv(city, medium, direction, date, time)
      .then(
        (csv) => Promise.resolve(store.dispatch(pushCsv(csv, city, medium, direction, date, time))),
      )
      .then(() => {
        drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} at ${time} on ${date}`);
        generateContours(currentState.data.data[city][medium][direction][date][time]);
      })
    // TODO: Graceful error
      .catch(console.error);
    return;
  }
  if (mapSelectionChanged(lastState, currentState)) {
    drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} at ${time} on ${date}`);
    generateContours(currentState.data.data[city][medium][direction][date][time]);
  }
};
