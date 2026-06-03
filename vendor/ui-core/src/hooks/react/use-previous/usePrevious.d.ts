/**
 * This React hook will return the previous calls value
 * @param value the value to store for next render.
 * @returns the previous value.
 */
declare const usePrevious: <T>(value: T) => T | undefined;
export default usePrevious;
