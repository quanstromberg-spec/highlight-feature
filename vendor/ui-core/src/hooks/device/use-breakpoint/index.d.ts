import { Token as Breakpoint } from '../../../design-tokens/breakpoints';
export declare const screenSizeIsExtraLarge: () => boolean;
export declare const screenSizeIsLarge: () => boolean;
export declare const screenSizeIsMedium: () => boolean;
export declare const screenSizeIsSmall: () => boolean;
declare const useBreakpoint: () => "Small" | "Medium" | "Large" | "ExtraLarge";
export declare const useIsBreakpointOrBelow: (breakpoint: Breakpoint) => boolean;
export declare const useIsBreakpointAndAbove: (breakpoint: Breakpoint) => boolean;
export default useBreakpoint;
