import { RefObject } from 'react';
/**
 * Allow focus tabbing with arrows keys within a container
 * Note that this hook disregards order defined by tabindex or flex order
 * https://allyjs.io/data-tables/focusable.html
 * @param target
 */
export declare const useTabbableByKeys: (target: RefObject<HTMLElement>) => void;
export default useTabbableByKeys;
