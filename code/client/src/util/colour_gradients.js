import * as tinygradient from 'tinygradient';

export function colourGradient(num, steps, ...colors) {
    let gradient = tinygradient(...colors);
    return gradient.rgb(steps)[num].toHexString();
}