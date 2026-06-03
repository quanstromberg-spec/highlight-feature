import { default as ResponsiveValue } from '../../../base/responsive-value';
export type Size = ResponsiveValue<"auto" | "full" | number>;
export type SizesProps = {
    width?: Size;
    height?: Size;
    size?: Size;
};
declare const useSize: (props: SizesProps) => {
    className: string;
    style: {
        [k: string]: any;
    };
};
export default useSize;
