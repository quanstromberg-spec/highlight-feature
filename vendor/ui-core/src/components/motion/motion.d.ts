import { default as React } from 'react';
import { MotionDuration, MotionOpacity, MotionToken } from './types';
export interface MotionProps {
    children: React.ReactNode;
    /**
     * @description Whether the motion should be triggered
     * @type {boolean}
     * @memberof MotionProps
     */
    in: boolean;
    /**
     * @description The duration of the motion
     * @type {MotionDuration}
     * @memberof MotionProps
     */
    duration: MotionDuration;
    /**
     * @description The delay of the motion
     * @type {number}
     * @memberof MotionProps
     */
    delay?: number;
    /**
     * @description The animation token to be used
     * @type {(MotionToken | MotionToken[])}
     * @memberof MotionProps
     */
    animationToken?: MotionToken | MotionToken[];
    /**
     * @description Whether the motion should only be animated once
     * @type {boolean}
     * @memberof MotionProps
     */
    animateOnlyOnce?: boolean;
    /**
     * @description The starting opacity of the motion
     * @type {AnimationOpacity}
     * @memberof MotionProps
     */
    opacityStart?: MotionOpacity;
}
declare const Motion: React.FC<MotionProps>;
export default Motion;
