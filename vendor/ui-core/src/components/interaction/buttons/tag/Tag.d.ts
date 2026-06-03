import { default as React } from 'react';
import { Token as ColorToken } from '../../../../design-tokens/colors';
import { ButtonProps, LinkButtonProps } from '../props';
type TagButtonVariant = Extract<ColorToken, "Grey600" | "White">;
export type TagButtonProps = ButtonProps & {
    active?: boolean;
    variant?: TagButtonVariant;
};
export declare const TagButton: React.ForwardRefExoticComponent<import('../../../../hooks').MarginProps & Pick<React.AriaAttributes, "aria-hidden" | "aria-labelledby" | "aria-label" | "aria-controls" | "aria-expanded" | "aria-haspopup"> & {
    id?: string;
    className?: string;
    text?: string;
    name?: string;
    value?: string;
    width?: import('../../../../base').ResponsiveValue<"auto" | "full">;
    loading?: boolean;
    submit?: boolean;
    disabled?: boolean;
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & {
    active?: boolean;
    variant?: TagButtonVariant;
} & React.RefAttributes<HTMLButtonElement>>;
export type TagLinkButtonProps = LinkButtonProps & {
    active?: boolean;
    variant?: TagButtonVariant;
};
export declare const TagLinkButton: React.ForwardRefExoticComponent<import('../../../../hooks').MarginProps & import('../../link/link-data').LinkData & Pick<React.AriaAttributes, "aria-hidden" | "aria-labelledby" | "aria-label"> & {
    id?: string;
    className?: string;
    text?: string;
    width?: import('../../../../base').ResponsiveValue<"auto" | "full">;
    loading?: boolean;
    disabled?: boolean;
    anchorProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & {
    active?: boolean;
    variant?: TagButtonVariant;
} & React.RefAttributes<HTMLAnchorElement>>;
export {};
