/* eslint-disable import/prefer-default-export */
import store from '../reduxstore';
import { emptyObject } from '../../nested_objects';

let currentState = { data: {} };

export function moveMap() {
  const previousState = currentState;
  currentState = store.getState();
  const previousCity = previousState.data.city;
  const currentCity = currentState.data.city;
  const { map_centres } = currentState.map;

  if (!emptyObject(map_centres) && previousCity !== currentCity) {
    currentState.map.map.setView(map_centres[currentCity], 13);
  }
}
