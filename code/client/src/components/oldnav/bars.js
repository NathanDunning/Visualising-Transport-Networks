/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/prefer-default-export */
import Snapshot from './snapshot';
import Animation from './animationbar';
import Average from './average';
import AverageOverX from './averageX';
import AverageAnimation from './animation_average_bar';
import AverageAnimationT from './anim_avg_t_bar';

export const NAVIGATION_BARS = [
  { component: Snapshot, name: 'Single Snapshot' },
  { component: Average, name: 'Average Over Time' },
  { component: AverageOverX, name: 'Average X' },
  { component: Animation, name: 'Animation' },
  { component: AverageAnimation, name: 'AnimationAverage' },
  { component: AverageAnimationT, name: 'Average Time X' },
];
