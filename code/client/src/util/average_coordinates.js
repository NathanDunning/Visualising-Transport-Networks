/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
export const average_coords = (array) => array.reduce((avg, curr) => {
  for (const i in curr) {
    if (Array.isArray(curr[i]) || typeof curr[i] === 'string') { continue; }
    if (avg[i] === undefined) {
      avg[i] = curr[i];
    } else { avg[i].duration = Number(avg[i].duration) + Number(curr[i].duration); }
  }
  return avg;
}, []).map((x) => {
  x.duration /= array.length;
  return x;
});
