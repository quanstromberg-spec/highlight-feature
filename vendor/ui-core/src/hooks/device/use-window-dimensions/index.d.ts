export type WindowDimensions = {
    innerWidth: number | null;
    innerHeight: number | null;
    outerWidth: number | null;
    outerHeight: number | null;
};
declare const useWindowDimensions: () => WindowDimensions;
export default useWindowDimensions;
