/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import store from '../reduxstore';
import { requestDate } from '../../requests';
import { drawInfoBox, generateContours } from '../../generate_contours';
import { average_coords } from '../../average_coordinates';

const mapSelectionChanged = (prevState, currentState) => {
  prevState = prevState.data;
  const prevCity = prevState.city;
  const prevDate = prevState.date;
  const prevDir = prevState.direction;
  const prevMedium = prevState.medium;
  const prevMode = prevState.mode;
  const {
    city, date, direction, medium, mode,
  } = currentState.data;
  return !(prevCity === city && prevDate === date && prevDir === direction
        && prevMedium === medium && prevMode === mode);
};

let currentState = {};

export const averageListener = async () => {
  const previousState = currentState;
  currentState = store.getState();

  if (currentState.data.mode !== 'average') { return; }
  if (!mapSelectionChanged(previousState, currentState)) {
    return;
  }

  const {
    city, medium, direction, date,
  } = currentState.data;

  await requestDate(city, medium, direction, date);
  currentState = store.getState();

  const averageArray = average_coords(
    Object.values(currentState.data.data[city][medium][direction][date]),
  );

  drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} on average on ${date}`);
  generateContours(averageArray);
};
