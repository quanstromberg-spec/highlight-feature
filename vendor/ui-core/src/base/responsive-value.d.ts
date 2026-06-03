/**
 * Represents a value that can be set differently for multiple
 * breakpoints.
 */
export type ResponsiveValue<T extends unknown> = T | [
    (T | undefined),
    T
] | [
    (T | undefined),
    (T | undefined),
    T
];
/**
 * A responsive array, for simplicity, it is easier to always work with an array.
 */
export type ResponsiveArray<T> = [T | undefined, T] | [T | undefined, T | undefined, T] | T[];
/**
 * Converts a ResponsiveValue<T> to an Responsive Array. It will also clean away
 * excessive values in lue to "small first" type of styling. ex a responsive value of `[5, 5, 6]`
 * will be converted to `[5, undefined, 6]` since the medium value offered no change from small.
 */
export declare function arrayFromResponiveValue<T>(value?: ResponsiveValue<T>): ResponsiveArray<T>;
export declare const breakpointAbbr: readonly ["sm", "md", "lg"];
export default ResponsiveValue;
