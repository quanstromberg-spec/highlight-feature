import { RefObject } from 'react';
export type ElementSize = {
    readonly clientHeight?: number;
    readonly clientWidth?: number;
    readonly scrollHeight?: number;
    readonly scrollWidth?: number;
};
/** Options for the useElementSize-hook */
export type ElementSizeOptions = {
    /** The rate in ms updates should be throttled to. */
    rateLimit?: number;
    /** disables updates from the hook. */
    disabled?: boolean;
};
/**
 * Attaches a Observer to the element passed and creates state for it that
 * is updated when the element changes size.
 *
 * @param ref the element to watch
 * @param options any additional options to the hook.
 * @returns its size
 */
declare const useElementSize: (ref: RefObject<HTMLElement>, options?: ElementSizeOptions) => ElementSize;
export default useElementSize;
