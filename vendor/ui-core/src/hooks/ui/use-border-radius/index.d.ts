import { default as ResponsiveValue } from '../../../base/responsive-value';
export type BorderRadiusProps = {
    /** Assigne to set a `border-radius` to the element. */
    br?: ResponsiveValue<number | "50%">;
};
declare const useBorderRadius: (props: BorderRadiusProps) => {
    className: string;
    style: {
        [k: string]: any;
    };
};
export default useBorderRadius;
