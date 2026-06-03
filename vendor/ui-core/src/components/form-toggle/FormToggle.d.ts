import { default as React } from 'react';
import { MarginProps } from '../../hooks/ui/use-spacing';
export type FormToggleProps = React.InputHTMLAttributes<HTMLInputElement> & MarginProps & {
    label?: string;
    onChange?: () => void;
};
declare const FormToggle: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & MarginProps & {
    label?: string;
    onChange?: () => void;
} & React.RefAttributes<HTMLInputElement>>;
export default FormToggle;
