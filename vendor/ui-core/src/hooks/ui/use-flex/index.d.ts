import { default as ResponsiveValue } from '../../../base/responsive-value';
export type FlexContainerProps = {
    alignItems?: ResponsiveValue<"baseline" | "center" | "flex-end" | "flex-start" | "stretch" | "inherit" | "initial" | "unset">;
    alignContent?: ResponsiveValue<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch">;
    justifyContent?: ResponsiveValue<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    flexWrap?: ResponsiveValue<"nowrap" | "wrap" | "wrap-reverse">;
    flexDirection?: ResponsiveValue<"row" | "row-reverse" | "column" | "column-reverse">;
    gap?: ResponsiveValue<number>;
};
export type FlexItemProps = {
    flexGrow?: ResponsiveValue<0 | 1 | 2 | 3>;
    flexShrink?: ResponsiveValue<0 | 1 | 2 | 3>;
    flexBasis?: ResponsiveValue<0 | "auto">;
    justifySelf?: ResponsiveValue<"center" | "flex-end" | "flex-start" | "stretch">;
    alignSelf?: ResponsiveValue<"center" | "flex-end" | "flex-start" | "stretch">;
    order?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6>;
};
export type ContainerProps = {
    /** @deprecated use 'flexType' set to block instead.  */
    container?: boolean;
    /**
     * if the element is a flex container, specify either block-level or inline-level flex.
     * *note:* if other "container flex-props" are used and "inline" isn't specified, it
     * automatically gets "block".
     */
    flexType?: "block" | "inline";
};
export type FlexProps = FlexContainerProps & FlexItemProps & ContainerProps;
declare const useFlex: (props: FlexProps) => {
    className: string;
    style: {
        [k: string]: any;
    };
};
export default useFlex;
