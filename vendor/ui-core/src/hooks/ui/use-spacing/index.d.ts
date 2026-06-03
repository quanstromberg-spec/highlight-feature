import { default as ResponsiveValue } from '../../../base/responsive-value';
export type MarginValue = ResponsiveValue<number>;
export type PaddingValue = ResponsiveValue<number>;
export type MarginProps = {
    m?: MarginValue;
    mt?: MarginValue;
    mr?: MarginValue;
    mb?: MarginValue;
    ml?: MarginValue;
    mx?: MarginValue;
    my?: MarginValue;
};
export type PaddingProps = {
    p?: PaddingValue;
    pt?: PaddingValue;
    pr?: PaddingValue;
    pb?: PaddingValue;
    pl?: PaddingValue;
    px?: PaddingValue;
    py?: PaddingValue;
};
export type SpacingProps = MarginProps & PaddingProps;
declare const useSpacing: (props: SpacingProps) => {
    className: string;
    style: {
        [k: string]: any;
    };
};
export default useSpacing;
