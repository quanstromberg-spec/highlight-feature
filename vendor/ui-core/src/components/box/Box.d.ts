import { default as React } from 'react';
import { BorderRadiusProps } from '../../hooks/ui/use-border-radius';
import { ColorProps } from '../../hooks/ui/use-colors';
import { FlexProps } from '../../hooks/ui/use-flex';
import { SizesProps } from '../../hooks/ui/use-size';
import { SpacingProps } from '../../hooks/ui/use-spacing';
import { TextStyleProps } from '../../hooks/ui/use-text-style';
export type BoxAriaAttributes = Pick<React.AriaAttributes, "aria-labelledby" | "aria-hidden" | "aria-pressed" | "aria-label" | "aria-live" | "aria-controls" | "aria-atomic" | "aria-roledescription"> & Pick<React.HTMLAttributes<HTMLElement>, "tabIndex" | "onKeyDown" | "onKeyUp" | "role" | "onFocus" | "onBlur">;
export type BoxTag = "div" | "blockquote" | "article" | "section" | "span" | "nav" | "header" | "li" | "tr" | "main" | "dl" | "ol" | "ul" | "details" | "summary" | "footer" | "figure" | "fieldset";
export type BoxProps = BoxAriaAttributes & BorderRadiusProps & SpacingProps & SizesProps & ColorProps & TextStyleProps & FlexProps & {
    /** The DOM id of the box */
    id?: string;
    /** sets which HTML Element to use on the box. */
    tag?: BoxTag;
    /** @deprecated use 'tag' instead. */
    component?: BoxTag;
    onClick?: (e: React.MouseEvent) => void;
    /** The contents of the box */
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    noOverflow?: boolean;
    positionRoot?: boolean;
    /** Setting this to true will make the `<Box>` get absolute positioning, top/left and width/height settings. */
    fillParent?: boolean;
    minHeightZero?: boolean;
    style?: React.CSSProperties;
};
declare const Box: React.ForwardRefExoticComponent<Pick<React.AriaAttributes, "aria-hidden" | "aria-labelledby" | "aria-pressed" | "aria-label" | "aria-live" | "aria-controls" | "aria-atomic" | "aria-roledescription"> & Pick<React.HTMLAttributes<HTMLElement>, "tabIndex" | "onKeyDown" | "onKeyUp" | "role" | "onFocus" | "onBlur"> & BorderRadiusProps & import('../../hooks').MarginProps & import('../../hooks').PaddingProps & SizesProps & import('../../hooks').ForegroundColorProps & import('../../hooks').BackgroundColorProps & TextStyleProps & import('../../hooks').FlexContainerProps & import('../../hooks').FlexItemProps & import('../../hooks').ContainerProps & {
    /** The DOM id of the box */
    id?: string;
    /** sets which HTML Element to use on the box. */
    tag?: BoxTag;
    /** @deprecated use 'tag' instead. */
    component?: BoxTag;
    onClick?: (e: React.MouseEvent) => void;
    /** The contents of the box */
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
    noOverflow?: boolean;
    positionRoot?: boolean;
    /** Setting this to true will make the `<Box>` get absolute positioning, top/left and width/height settings. */
    fillParent?: boolean;
    minHeightZero?: boolean;
    style?: React.CSSProperties;
} & React.RefAttributes<HTMLElement>>;
export default Box;
