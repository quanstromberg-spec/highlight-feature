declare const useThrottledState: <T>(value: T, delay?: number) => readonly [T, import('lodash').DebouncedFuncLeading<import('react').Dispatch<import('react').SetStateAction<T>>>];
export default useThrottledState;
