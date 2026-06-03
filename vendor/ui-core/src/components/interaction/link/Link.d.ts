import { default as React, ReactNode } from 'react';
import { BorderRadiusProps } from '../../../hooks/ui/use-border-radius';
import { SizesProps } from '../../../hooks/ui/use-size';
import { SpacingProps } from '../../../hooks/ui/use-spacing';
import { LinkData } from './link-data';
export type LinkAriaProps = Pick<React.AriaAttributes, "aria-current" | "aria-label">;
export type LinkProps = SpacingProps & SizesProps & BorderRadiusProps & LinkData & LinkAriaProps & {
    id?: string;
    className?: string;
    children?: ReactNode | ReactNode[];
    underline?: boolean;
    tabIndex?: number;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
};
declare const Link: React.ForwardRefExoticComponent<import('../../../hooks').MarginProps & import('../../../hooks').PaddingProps & SizesProps & BorderRadiusProps & LinkData & LinkAriaProps & {
    id?: string;
    className?: string;
    children?: ReactNode | ReactNode[];
    underline?: boolean;
    tabIndex?: number;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
} & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
