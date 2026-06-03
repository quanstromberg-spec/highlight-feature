import { default as React } from 'react';
import { default as IconId } from '../../../../base/icons';
import { Token as ColorToken } from '../../../../design-tokens/colors';
import { ButtonProps, LinkButtonProps } from '../props';
export type IconButtonVariant = Extract<ColorToken, "SuccessGreen" | "Primary" | "White"> | "Ghost";
type IconSize = "ExtraBig" | "Big" | "Medium" | "Small";
export type IconButtonProps = Omit<ButtonProps, "width"> & {
    iconId: IconId;
    iconSize?: number;
    variant?: IconButtonVariant;
    size?: IconSize;
};
export declare const IconButton: React.ForwardRefExoticComponent<Omit<ButtonProps, "width"> & {
    iconId: IconId;
    iconSize?: number;
    variant?: IconButtonVariant;
    size?: IconSize;
} & React.RefAttributes<HTMLButtonElement>>;
export type IconLinkButtonProps = Omit<LinkButtonProps, "width"> & {
    iconId: IconId;
    iconSize?: number;
    variant?: IconButtonVariant;
    size?: "ExtraBig" | "Big" | "Medium" | "Small";
};
export declare const IconLinkButton: React.ForwardRefExoticComponent<Omit<LinkButtonProps, "width"> & {
    iconId: IconId;
    iconSize?: number;
    variant?: IconButtonVariant;
    size?: "ExtraBig" | "Big" | "Medium" | "Small";
} & React.RefAttributes<HTMLAnchorElement>>;
export {};
