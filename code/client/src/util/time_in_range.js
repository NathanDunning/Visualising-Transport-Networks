/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as _ from 'lodash';
import store from './redux/reduxstore';

export default function time_in_range(t, compareTo) {
  compareTo = convertMilTimeToDate(compareTo);
  t = convertMilTimeToDate(t);
  const distance = store.getState().config.distanceToHour * 1000 * 60;
  return Math.abs(t - compareTo) < distance;
}

export function time_in_X(t, compareTo, t2) {
  compareTo = convertMilTimeToDate(compareTo);
  t = convertMilTimeToDate(t);
  t2 = convertMilTimeToDate(t2);
  return compareTo >= t && compareTo <= t2;
}

export function subtractTime(t, t2) {
  t = convertMilTimeToDate(t);
  t2 = convertMilTimeToDate(t2);
  return Math.abs(t - t2) / (1000 * 60);
}

function convertMilTimeToDate(milTime) {
  milTime = _.chunk(milTime.split(''), 2);
  milTime = milTime.map((x) => x.join('')).join(':');
  return new Date(`2017-01-01 ${milTime}:00`);
}
