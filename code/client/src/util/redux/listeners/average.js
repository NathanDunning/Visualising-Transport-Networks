import store from '../reduxstore';
import {requestDate} from '../../requests';
import {drawInfoBox, generateContours} from '../../generate_contours';
import {average_coords} from '../../average_coordinates';

const mapSelectionChanged = (prevState, currentState) => {
    prevState = prevState.data;
    let prevCity = prevState.city,
        prevDate = prevState.date,
        prevDir = prevState.direction,
        prevMedium = prevState.medium,
        prevMode = prevState.mode,
        {city, date, direction, medium, mode} = currentState.data;
    return !(prevCity === city && prevDate === date && prevDir === direction &&
        prevMedium === medium && prevMode === mode);
};

let currentState = {};

export const averageListener = async () => {
    let previousState = currentState;
    currentState = store.getState();

    if (currentState.data.mode !== 'average')
        return;
    if (!mapSelectionChanged(previousState, currentState)) {
        return;
    }

    let {city, medium, direction, date} = currentState.data;

    await requestDate(city, medium, direction, date);
    currentState = store.getState();

    let averageArray = average_coords(Object.values(currentState.data.data[city][medium][direction][date]));

    drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} on average on ${date}`);
    generateContours(averageArray);
};
