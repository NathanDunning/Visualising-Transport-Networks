/* eslint-disable import/prefer-default-export */
import * as tinygradient from 'tinygradient';

export function colourGradient(num, steps, ...colors) {
  const gradient = tinygradient(...colors);
  return gradient.rgb(steps)[num].toHexString();
}
