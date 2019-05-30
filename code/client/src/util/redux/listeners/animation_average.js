import store from '../reduxstore';
import {requestDate, requestHour} from '../../requests';
import {drawInfoBox, generateContours} from '../../generate_contours';
import time_in_range from "../../time_in_range";
import {average_coords} from "../../average_coordinates";

const mapSelectionChanged = (prevState, currentState) => {
    prevState = prevState.data;
    let prevCity = prevState.city,
        prevTime = prevState.time,
        prevDir = prevState.direction,
        prevMedium = prevState.medium,
        prevMode = prevState.mode,
        {city, time, direction, medium, mode} = currentState.data;
    return !(prevCity === city && prevTime === time && prevDir === direction &&
        prevMedium === medium && prevMode === mode);
};

let currentState = {},
    currentAnimation = -1;

export const animationAverageListener = async () => {
    let previousState = currentState;
    currentState = store.getState();
    if (currentState.data.mode !== 'animationAverage') {
        if (currentAnimation !== -1) {
            clearInterval(currentAnimation);
            currentAnimation = -1;
        }
        return;
    }

    let {city, direction, medium, time} = currentState.data;

    //If the selection has changed do the animation
    if (mapSelectionChanged(previousState, currentState)) {
        if (currentAnimation !== -1)
            clearInterval(currentAnimation);
        let frames = [],
            times = [],
            toPlay = [],
            toAverage = [],
            temp,
            idx = 0;

        await requestHour(city, medium, direction, time);
        currentState = store.getState();

        let dates = currentState.data.data[city][medium][direction];
        for (let date in dates) {
            await requestDate(city, medium, direction, date);
            currentState = store.getState();

            frames = {...currentState.data.data[city][medium][direction][date],...frames};
            times = Object.keys(frames).filter(t => time_in_range(t, time));

            temp = Object.values(currentState.data.data[city][medium][direction])
                .map(x => Object.keys(x)
                .filter(y => time_in_range(y, time)));
        }

        for (let date in dates) {
            let allData = currentState.data.data[city][medium][direction][date];
            let elem = [];
            for (let t of temp) {
                for (let e of t) {
                    if (allData[e]!==undefined)
                        elem.push(allData[e]);
                }
            }
            elem.date = date;
            toAverage.push(elem);
        }

        for (let f in toAverage) {
            let newE = average_coords(toAverage[f]);
            newE.date = toAverage[f].date;
            toPlay.push(newE);
        }

        currentAnimation = setInterval(
            () => {
                    if (toPlay[idx] !== undefined) {
                        let dateString = new Date(toPlay[idx].date).toString().slice(0, 10);
                        drawInfoBox(`Average time taken by ${medium} traffic going ${direction} ${city} 30min either side of ${time} hrs on ${dateString}`);
                        generateContours(toPlay[idx]);
                    }
                    idx++;
                    if (idx >= times.length)
                        idx = 0;
                },500
        )
    }

};