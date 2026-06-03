import { default as React, InputHTMLAttributes } from 'react';
import { default as IconId } from '../../base/icons';
import { SizesProps } from '../../hooks';
import { SpacingProps } from '../../hooks/ui/use-spacing';
export type FormTextProps = Omit<InputHTMLAttributes<HTMLInputElement>, "width"> & Pick<SizesProps, "width"> & Pick<SpacingProps, "m" | "mb" | "ml" | "mr" | "mt" | "mx" | "my"> & {
    label: string;
    error?: string;
    iconId?: IconId;
};
export declare const FormText: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "width"> & Pick<SizesProps, "width"> & Pick<SpacingProps, "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my"> & {
    label: string;
    error?: string;
    iconId?: IconId;
} & React.RefAttributes<HTMLInputElement>>;
export default FormText;
