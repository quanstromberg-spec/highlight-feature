import { default as IconId } from '../../../../base/icons';
import { Token as ColorToken } from '../../../../design-tokens/colors';
import { ButtonProps, IconPosition } from '../props';
type FunctionButtonVariant = Extract<ColorToken, "Grey600" | "White" | "Primary" | "Grey400">;
export type FunctionButtonProps = ButtonProps & {
    variant?: FunctionButtonVariant;
    suffix?: string;
    iconId?: IconId;
    iconPosition?: IconPosition;
    iconSize?: number;
};
export declare const FunctionButton: import('react').ForwardRefExoticComponent<import('../../../../hooks').MarginProps & Pick<import('react').AriaAttributes, "aria-hidden" | "aria-labelledby" | "aria-label" | "aria-controls" | "aria-expanded" | "aria-haspopup"> & {
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
    onClick?: import('react').MouseEventHandler<HTMLButtonElement>;
} & {
    variant?: FunctionButtonVariant;
    suffix?: string;
    iconId?: IconId;
    iconPosition?: IconPosition;
    iconSize?: number;
} & import('react').RefAttributes<HTMLButtonElement>>;
export {};
