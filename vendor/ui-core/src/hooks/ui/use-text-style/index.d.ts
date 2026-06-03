import { default as ResponsiveValue, ResponsiveArray } from '../../../base/responsive-value';
export type TypographyTextAlign = "center" | "inherit" | "justify"
/** Should you use `"start"` instead? */
 | "left"
/** Should you use `"end"` instead? */
 | "right" | "start" | "end";
export type TypographyTextDecoration = "line-through" | "overline" | "underline" | "none";
export type TypographyWordBreak = "normal" | "break-word" | "break-all" | "keep-all";
export type TextStyleProps = {
    /** Controls `text-align` css property as responsive value. */
    textAlign?: ResponsiveValue<TypographyTextAlign>;
    /** Clams the amount of lines to the number assigned. */
    lineClamp?: ResponsiveValue<"initial" | number>;
    /** @deprecated use `decoration="line-through"` instead. */
    strikethrough?: ResponsiveValue<boolean>;
    /** Controls the "word-break" css property as a responsive value */
    wordBreak?: ResponsiveValue<TypographyWordBreak>;
    /** Controls the `text-decoration` css property as a responsive value. */
    decoration?: ResponsiveValue<TypographyTextDecoration>;
};
export declare const textStyleClasses: (textAlign: ResponsiveArray<TypographyTextAlign>, lineClamp: ResponsiveArray<"initial" | number>, strikethrough: ResponsiveArray<boolean>, decoration: ResponsiveArray<TypographyTextDecoration>, wordBreak: ResponsiveArray<TypographyWordBreak>) => string;
declare const useTextStyle: (props: TextStyleProps) => {
    className: string;
    style: {
        [k: string]: any;
    };
};
export default useTextStyle;
