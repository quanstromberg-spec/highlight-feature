export interface IIntersectionObserverOptions {
    readonly root?: Element | Document | null;
    readonly rootMargin?: string;
    readonly threshold: number | number[];
}
declare const useIntersectionObserver: (observerOptions: IIntersectionObserverOptions) => {
    targetRef: import('react').MutableRefObject<null>;
    isIntersecting: boolean;
};
export default useIntersectionObserver;
