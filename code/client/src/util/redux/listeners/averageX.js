import store from '../reduxstore';
import {requestDate, requestHour} from '../../requests';
import {drawErrorBox, drawInfoBox, generateContours} from '../../generate_contours';
import {time_in_X} from '../../time_in_range';
import {average_coords} from '../../average_coordinates';

const mapSelectionChanged = (prevState, currentState) => {
    prevState = prevState.data;
    let prevCity = prevState.city,
        prevDate = prevState.date,
        prevDir = prevState.direction,
        prevMedium = prevState.medium,
        prevMode = prevState.mode,
        prevTime = prevState.time,
        prevTime2 = prevState.t2,
        {city, date, direction, medium, mode, time, t2} = currentState.data;
    return !(prevCity === city && prevDate === date && prevTime2 === t2 && prevDir === direction &&
        prevMedium === medium && prevMode === mode && prevTime === time);
};

let currentState = {};

export const averageXListener = async () => {
    let previousState = currentState;
    currentState = store.getState();

    if (currentState.data.mode !== 'averageX')
        return;
    if (!mapSelectionChanged(previousState, currentState)) {
        return;
    }

    let {city, medium, direction, time, t2} = currentState.data;

    await requestHour(city, medium, direction, time);
    currentState = store.getState();

    // TODO: Check cumulative averaging error, debug code below
    // let toDisplay = [];
    // let temp = [],
    //     averageArray = [],
    //     elem = [];
    //
    // let dates = currentState.data.data[city][medium][direction];
    // for (let date in dates) {
    //     await requestDate(city, medium, direction, date);
    //     let frames = {...currentState.data.data[city][medium][direction][date]},
    //         times = Object.keys(frames).filter(t => time_in_X(time, t, t2));
    //
    //     temp = Object.values(currentState.data.data[city][medium][direction]).map(x=>Object.keys(x)
    //         .filter(y=>time_in_X(time, y, t2)));
    // }
    //
    // console.log(temp);
    //
    // for (let date in dates) {
    //     let allData = currentState.data.data[city][medium][direction][date];
    //     let elem = [];
    //     for (let t of temp) {
    //         for (let e of t) {
    //             if (!(allData[e]===undefined))
    //                 elem.push(allData[e])
    //         }
    //     }
    //     elem.date = date;
    //     averageArray.push(elem);
    // }
    //
    // console.log(averageArray);
    //
    // for (let f in averageArray) {
    //     let newE = average_coords(averageArray[f]);
    //     newE.date = averageArray[f].date;
    //     toDisplay.push(newE);
    // }
    //
    // toDisplay = average_coords(toDisplay);

    let averageArray = average_coords(
        Object.values(currentState.data.data[city][medium][direction])
            .map(x => Object.keys(x).filter(y => time_in_X(time, y, t2)).map(y => x[y]))
            .flatMap(x => x)
    );

    if (t2==='') {
        drawErrorBox('Error: No end time selected.');
        console.log("No t2 selected");
    }  else if (t2<time) {
        drawErrorBox('Error: End must be before start');
    } else {
        drawErrorBox();
        let date = store.getState().data.date;
        console.log(date);
        drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} on ${date} averaged between ${time} and ${t2}`);
        generateContours(averageArray);
    }
};