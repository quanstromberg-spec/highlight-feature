import { default as React } from 'react';
import { TypographyToken } from '../../design-tokens';
import { MarginProps } from '../../hooks/ui/use-spacing';
export type FormRadioProps = React.InputHTMLAttributes<HTMLInputElement> & MarginProps & {
    label?: string;
    error?: string;
    variant?: Extract<TypographyToken, "Body1" | "Body2">;
};
export declare const FormRadio: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & MarginProps & {
    label?: string;
    error?: string;
    variant?: Extract<TypographyToken, "Body1" | "Body2">;
} & React.RefAttributes<HTMLInputElement>>;
export default FormRadio;
