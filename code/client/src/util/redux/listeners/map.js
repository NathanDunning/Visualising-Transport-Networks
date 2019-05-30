import store from '../reduxstore';
import {checkNested} from '../../nested_objects';
import {drawInfoBox, generateContours} from '../../generate_contours';
import {pushCsv} from '../actions';
import {requestSingleCsv} from '../../requests';

const mapSelectionChanged = (prevState, currentState) => {
    prevState = prevState.data;
    let prevCity = prevState.city,
        prevDate = prevState.date,
        prevTime = prevState.time,
        prevDir = prevState.direction,
        prevMedium = prevState.medium,
        prevMode = prevState.mode,
        {city, date, time, direction, medium, mode} = currentState.data;
    return !(prevCity === city && prevDate === date && prevTime === time &&
        prevDir === direction && prevMedium === medium && prevMode === mode);
};

let currentState = null;

export const generateContoursHandler = () => {
    let lastState = currentState;
    currentState = store.getState();
    if (currentState.data.mode !== 'snapshot')
        return;
    const {city, medium, direction, date, time} = currentState.data;
    const map = currentState.map.map;

    if (map === null || city === null)
        return;
    if (!checkNested(currentState.data.data, city, medium, direction, date, time)) {
        requestSingleCsv(city, medium, direction, date, time)
            .then(csv => Promise.resolve(store.dispatch(pushCsv(csv, city, medium, direction, date, time))))
            .then(() => {
                drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} at ${time} on ${date}`);
                generateContours(currentState.data.data[city][medium][direction][date][time])
            })
            //TODO: Graceful error
            .catch(console.error);
        return;
    }
    if (mapSelectionChanged(lastState, currentState)) {
        drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} at ${time} on ${date}`);
        generateContours(currentState.data.data[city][medium][direction][date][time])
    }
};
