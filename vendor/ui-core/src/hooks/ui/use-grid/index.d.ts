import { ResponsiveValue } from '../../../base';
export type GridContainerProps = {
    columnGap?: ResponsiveValue<number>;
    rowGap?: ResponsiveValue<number>;
};
declare const useGrid: (props: GridContainerProps) => {
    className: string;
    style: {
        [k: string]: number;
    };
};
export default useGrid;
