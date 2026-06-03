import { default as React, MouseEventHandler } from 'react';
import { default as ResponsiveValue } from '../../../base/responsive-value';
import { MarginProps } from '../../../hooks/ui/use-spacing';
import { default as LinkData } from '../link/link-data';
export type IconPosition = "start" | "end";
export type ButtonProps = MarginProps & Pick<React.AriaAttributes, "aria-controls" | "aria-hidden" | "aria-label" | "aria-labelledby" | "aria-haspopup" | "aria-expanded"> & {
    id?: string;
    className?: string;
    text?: string;
    name?: string;
    value?: string;
    width?: ResponsiveValue<"auto" | "full">;
    loading?: boolean;
    submit?: boolean;
    disabled?: boolean;
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export type LinkButtonProps = MarginProps & LinkData & Pick<React.AriaAttributes, "aria-hidden" | "aria-label" | "aria-labelledby"> & {
    id?: string;
    className?: string;
    text?: string;
    width?: ResponsiveValue<"auto" | "full">;
    loading?: boolean;
    disabled?: boolean;
    anchorProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};
