import store from '../reduxstore';
import {requestDate} from '../../requests';
import {drawErrorBox, drawInfoBox, generateContours} from '../../generate_contours';

const mapSelectionChanged = (prevState, currentState) => {
    prevState = prevState.data;
    let prevCity = prevState.city,
        prevDate = prevState.date,
        prevDir = prevState.direction,
        prevMedium = prevState.medium,
        prevTime = prevState.time,
        prevTime2 = prevState.t2,
        prevMode = prevState.mode,
        prevPause = prevState.pause,
        {city, date, direction, medium, mode, time, t2, pause} = currentState.data;
    return !(prevCity === city && prevDate === date && prevTime2 === t2 && prevTime === time && prevDir === direction &&
        prevMedium === medium && prevMode === mode && prevPause === pause);
};

let currentState = {},
    currentAnimation = -1,
    oldState = {};

export const animationListener = async () => {
    let previousState = currentState;
    currentState = store.getState();
    if (currentState.data.mode !== 'animation') {
        if (currentAnimation !== -1) {
            clearInterval(currentAnimation);
            currentAnimation = -1;
        }
        return;
    }

    let {city, date, direction, medium, time, t2} = currentState.data;

    //If the selection has changed do the animation
    Loop1:
    if (mapSelectionChanged(previousState, currentState)) {
        if (currentAnimation !== -1)
            clearInterval(currentAnimation);
        await requestDate(city, medium, direction, date);
        currentState = store.getState();
        let frames = currentState.data.data[city][medium][direction][date],
            times = Object.keys(frames),
            temp = [],
            idx = 0;

        for (let t in times) {
            if (+times[t]>=+time && +times[t]<=+t2) {
                temp.push(times[t]);
            }
        }

        console.log(t2);

        if (t2==='') {
            // TODO: throw some errors
            drawErrorBox('Error: No end time selected.');
            break Loop1;
        }  else if (t2<time) {
            drawErrorBox('Error: End must be before start');
            break Loop1;
        } else {
            drawErrorBox();
        }

        currentAnimation = setInterval(
            ()=>{
                drawInfoBox(`Time taken by ${medium} traffic going ${direction} ${city} at ${temp[idx]} on ${date}`);
                generateContours(frames[temp[idx]]);
                idx++;
                if (idx >= temp.length)
                    idx=0;
            },
            500
        )
    }

};