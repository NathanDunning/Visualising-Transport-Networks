/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
import { createStore, combineReducers } from 'redux';
import clone from 'clone';
import { createIfNotExist } from '../nested_objects';


const initialMapState = {
  map: null,
  map_centres: {},
};

const initialDataState = {
  city: null,
  direction: null,
  medium: null,
  date: null,
  time: null,
  t2: '',
  available_snapshots: {},
  data: {},
  mode: 'snapshot',
  pause: false,
  prevState: null,
};


const initialConfigState = {
  distanceToHour: 30,
};

export default createStore(combineReducers(
  {
    map: mapReducer,
    data: dataReducer,
    config: configReducer,
  },
));

function mapReducer(state = initialMapState, action) {
  const newState = {
    map: state.map,
    map_centres: state.map_centres,
  };
  switch (action.type) {
    case 'PUSH_MAP':
      newState.map = action.payload;
      return newState;
    case 'ADD_CITY_CENTRES':
      newState.map_centres = action.payload;
      return newState;
    default:
      return state;
  }
}

function dataReducer(state = initialDataState, action) {
  action.payload = action.payload || {};
  let {
    data = {}, city = '', date = '', time = '', direction = '', medium = '', t2 = '', pause = '',
  } = action.payload;
  const newState = clone(state);
  switch (action.type) {
    case 'PUSH_ALL_CSV':
      action.payload.forEach((csv) => {
        const {
          data, city, date, direction, medium, time,
        } = csv;
        createIfNotExist(newState.data, data, city, medium, direction, date, time);
      });
      return newState;
    case 'PUSH_CSV':
      createIfNotExist(newState.data, data, city, medium, direction, date, time);
      return newState;
    case 'UPDATE_AVAILABILITY':
      newState.available_snapshots = action.payload;
      city = Object.keys(action.payload)[0];
      medium = Object.keys(action.payload[city])[0];
      direction = Object.keys(action.payload[city][medium])[0];
      date = Object.keys(action.payload[city][medium][direction])[0];
      time = action.payload[city][medium][direction][date][0];
      t2 = action.payload[city][medium][direction][date][0];
      // eslint-disable-next-line
        case 'PUSH_NEW_FRAME':
      newState.city = city;
      newState.date = date;
      newState.time = time;
      newState.medium = medium;
      newState.direction = direction;
      newState.mode = 'snapshot';
      return newState;
    case 'PUSH_ANIMATION':
      newState.city = city;
      newState.medium = medium;
      newState.direction = direction;
      newState.date = date;
      newState.time = time;
      newState.t2 = t2;
      newState.pause = pause;
      newState.mode = 'animation';
      return newState;
    case 'PUSH_ANIMATION_AVERAGE':
      newState.city = city;
      newState.medium = medium;
      newState.direction = direction;
      newState.time = time;
      newState.pause = pause;
      newState.mode = 'animationAverage';
      return newState;
    case 'PUSH_ANIMATION_AVERAGE_T':
      newState.city = city;
      newState.medium = medium;
      newState.direction = direction;
      newState.date = date;
      newState.time = time;
      newState.t2 = t2;
      newState.pause = pause;
      newState.mode = 'animationAverageT';
      return newState;
    case 'PUSH_AVERAGE':
      newState.city = city;
      newState.medium = medium;
      newState.direction = direction;
      newState.date = date;
      newState.mode = 'average';
      return newState;
    case 'PUSH_AVERAGE_X':
      newState.city = city;
      newState.medium = medium;
      newState.direction = direction;
      newState.time = time;
      newState.t2 = t2;
      newState.mode = 'averageX';
      return newState;
    default:
      return state;
  }
}

// eslint-disable-next-line no-unused-vars
function configReducer(state = initialConfigState, action) {
  return { ...state };
}
