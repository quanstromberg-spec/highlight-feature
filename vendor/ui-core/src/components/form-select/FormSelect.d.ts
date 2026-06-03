import { default as React, OptionHTMLAttributes } from 'react';
import { SizesProps } from '../../hooks/ui/use-size';
import { SpacingProps } from '../../hooks/ui/use-spacing';
export type FormSelectOption = Pick<OptionHTMLAttributes<HTMLOptionElement>, "label" | "value" | "disabled" | "hidden">;
export type FormSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "width" | "size"> & Pick<SizesProps, "width"> & Pick<SpacingProps, "m" | "mb" | "ml" | "mr" | "mt" | "mx" | "my"> & {
    label?: string;
    options: FormSelectOption[];
    disabled?: boolean;
    error?: string;
};
export declare const FormSelect: React.ForwardRefExoticComponent<Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size" | "width"> & Pick<SizesProps, "width"> & Pick<SpacingProps, "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my"> & {
    label?: string;
    options: FormSelectOption[];
    disabled?: boolean;
    error?: string;
} & React.RefAttributes<HTMLSelectElement>>;
export default FormSelect;
