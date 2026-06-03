import { default as React } from 'react';
import { default as IconId } from '../../../base/icons';
import { Size } from '../../../hooks/ui/use-size';
import { ButtonProps, IconPosition } from './props';
export type BaseButtonProps = ButtonProps & {
    loaderSize?: Size;
    suffix?: React.ReactNode;
    iconId?: IconId;
    iconSize?: number;
    iconPosition?: IconPosition;
};
declare const BaseButton: React.ForwardRefExoticComponent<import('../../../hooks').MarginProps & Pick<React.AriaAttributes, "aria-hidden" | "aria-labelledby" | "aria-label" | "aria-controls" | "aria-expanded" | "aria-haspopup"> & {
    id?: string;
    className?: string;
    text?: string;
    name?: string;
    value?: string;
    width?: import('../../../base').ResponsiveValue<"auto" | "full">;
    loading?: boolean;
    submit?: boolean;
    disabled?: boolean;
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & {
    loaderSize?: Size;
    suffix?: React.ReactNode;
    iconId?: IconId;
    iconSize?: number;
    iconPosition?: IconPosition;
} & React.RefAttributes<HTMLButtonElement>>;
export default BaseButton;
