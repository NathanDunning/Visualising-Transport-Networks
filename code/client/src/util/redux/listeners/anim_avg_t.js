import store from '../reduxstore';
import {requestDate, requestHour} from '../../requests';
import {drawErrorBox, drawInfoBox, generateContours} from '../../generate_contours';
import {time_in_X} from "../../time_in_range";
import {average_coords} from "../../average_coordinates";

const mapSelectionChanged = (prevState, currentState) => {
    prevState = prevState.data;
    let prevCity = prevState.city,
        prevDate = prevState.date,
        prevTime = prevState.time,
        prevT2 = prevState.t2,
        prevDir = prevState.direction,
        prevMedium = prevState.medium,
        prevMode = prevState.mode,
        {city, date, time, direction, medium, mode, t2} = currentState.data;
    return !(prevCity === city &&  prevDate === date && prevTime === time && prevT2 === t2 && prevDir === direction &&
        prevMedium === medium && prevMode === mode);
};

let currentState = {},
    currentAnimation = -1;

export const animationAverageTListener = async () => {
    let previousState = currentState;
    currentState = store.getState();
    if (currentState.data.mode !== 'animationAverageT') {
        if (currentAnimation !== -1) {
            clearInterval(currentAnimation);
            currentAnimation = -1;
        }
        return;
    }

    let {city, direction, medium, time, t2} = currentState.data;

    //If the selection has changed do the animation
    Loop1:
    if (mapSelectionChanged(previousState, currentState)) {
        if (currentAnimation !== -1)
            clearInterval(currentAnimation);
        let toPlay = [],
            toAverage = [],
            temp,
            idx = 0;

        await requestHour(city, medium, direction, time);
        currentState = store.getState();

        if (t2==='') {
            // TODO: throw some errors
            drawErrorBox('Error: No end time selected.');
            break Loop1;
        } else if (t2<time) {
            drawErrorBox('Error: End must be before start');
            break Loop1;
        } else {
            drawErrorBox();
        }

        let dates = currentState.data.data[city][medium][direction];
        for (let date in dates) {
            await requestDate(city, medium, direction, date);
            let frames = {...currentState.data.data[city][medium][direction][date]},
                times = Object.keys(frames).filter(t => time_in_X(time,t,t2));

            temp = Object.values(currentState.data.data[city][medium][direction])
                .map(x => Object.keys(x)
                    .filter(y => time_in_X(time, y, t2)));
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

        console.log(toPlay);

            currentAnimation = setInterval(
                () => {
                    if (toPlay[idx] !== undefined) {
                        let dateString = new Date(toPlay[idx].date).toString().slice(0, 10);
                        drawInfoBox(`Average time taken by ${medium} traffic going ${direction} ${city} on ${dateString} from ${time} to ${t2}.`);
                        generateContours(toPlay[idx]);
                    }
                    idx++;
                    if (idx >= toPlay.length)
                        idx = 0;
                }, 500
            )
        }
};