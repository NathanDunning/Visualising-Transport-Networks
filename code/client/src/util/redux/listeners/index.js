import store from '../reduxstore';
import { generateContoursHandler } from './map';
import { moveMap } from './movemap';
import { animationListener } from './animation';
import { averageListener } from './average';
import { averageXListener } from './averageX';
import { animationAverageListener } from './animation_average';
import { animationAverageTListener } from './anim_avg_t';


/**
 * Function called on each store update
 */
const listeners = [generateContoursHandler, moveMap,
  animationListener, animationAverageTListener, animationAverageListener, averageListener,
  averageXListener];
store.subscribe(() => listeners.forEach((x) => x()));
