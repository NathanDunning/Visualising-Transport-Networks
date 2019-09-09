export const pushAnimation = (city, medium, direction, date, time, t2, pause) => ({
  type: 'PUSH_ANIMATION',
  payload: {
    city,
    medium,
    direction,
    date,
    time,
    t2,
    pause,
  },
});

export const pushAnimationOfHour = (city, medium, direction, time, pause) => ({
  type: 'PUSH_ANIMATION_AVERAGE',
  payload: {
    city,
    medium,
    direction,
    time,
    pause,
  },
});

export const pushAnimationOfT = (city, medium, direction, date, time, t2, pause) => ({
  type: 'PUSH_ANIMATION_AVERAGE_T',
  payload: {
    city,
    medium,
    direction,
    date,
    time,
    t2,
    pause,
  },
});

export const pushAverage = (city, medium, direction, date) => ({
  type: 'PUSH_AVERAGE',
  payload: {
    city,
    medium,
    direction,
    date,
  },
});

export const pushAverageX = (city, medium, direction, time, t2) => ({
  type: 'PUSH_AVERAGE_X',
  payload: {
    city,
    medium,
    direction,
    time,
    t2,
  },
});

export const requestSnapshot = (city, medium, direction, date, time) => ({
  type: 'PUSH_NEW_FRAME',
  payload: {
    city,
    medium,
    direction,
    date,
    time,
  },
});

export const pushMap = (map) => ({
  type: 'PUSH_MAP',
  payload: map,
});

export const pushCsv = (data, city, medium, direction, date, time) => ({
  type: 'PUSH_CSV',
  payload: {
    data,
    city,
    date,
    time,
    direction,
    medium,
  },
});

export const pushAllCsv = (key, data) => {
  const payload = key.map((x, idx) => ({ ...x, data: data[idx] }));
  return {
    type: 'PUSH_ALL_CSV',
    payload,
  };
};
