import { default as React, RefObject, TextareaHTMLAttributes } from 'react';
import { SpacingProps } from '../../hooks/ui/use-spacing';
export type FormTextAreaProps = Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows" | "onFocus"> & Pick<SpacingProps, "m" | "mb" | "ml" | "mr" | "mt" | "mx" | "my"> & {
    label: string;
    error?: string;
    forwardedRef?: RefObject<HTMLTextAreaElement>;
    className?: string;
};
export declare const FormTextArea: React.ForwardRefExoticComponent<Pick<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onFocus" | "rows"> & Pick<SpacingProps, "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my"> & {
    label: string;
    error?: string;
    forwardedRef?: RefObject<HTMLTextAreaElement>;
    className?: string;
} & React.RefAttributes<HTMLTextAreaElement>>;
export default FormTextArea;
