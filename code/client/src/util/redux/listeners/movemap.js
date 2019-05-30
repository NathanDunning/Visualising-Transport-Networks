import store from '../reduxstore';
import {emptyObject} from '../../nested_objects';

let currentState = {data:{}};

export function moveMap() {
    let previousState = currentState;
    currentState = store.getState();
    let previousCity = previousState.data.city,
        currentCity  = currentState.data.city,
        map_centres = currentState.map.map_centres;

    if (!emptyObject(map_centres) && previousCity !== currentCity)
        currentState.map.map.setView(map_centres[currentCity], 13);
}
