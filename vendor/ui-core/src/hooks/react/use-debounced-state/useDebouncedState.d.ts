declare const useDebouncedState: <T>(value: T, delay?: number) => readonly [T, import('lodash').DebouncedFunc<import('react').Dispatch<import('react').SetStateAction<T>>>];
export default useDebouncedState;
