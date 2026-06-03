import { default as React } from 'react';
import { TypographyToken } from '../../design-tokens';
import { MarginProps } from '../../hooks/ui/use-spacing';
export type FormCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & MarginProps & {
    /** The label of the checkbox */
    label?: string | React.ReactNode;
    /** Activating semi will change the look of the check icon when checked. */
    semi?: boolean;
    /** Any validation errors */
    error?: string;
    /** Select what variant the label should have. */
    variant?: Extract<TypographyToken, "Body1" | "Body2">;
    /** The aria-label on the label element. If no label text provided, use this aria label prop. */
    ariaLabel?: string;
};
export declare const FormCheckbox: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & MarginProps & {
    /** The label of the checkbox */
    label?: string | React.ReactNode;
    /** Activating semi will change the look of the check icon when checked. */
    semi?: boolean;
    /** Any validation errors */
    error?: string;
    /** Select what variant the label should have. */
    variant?: Extract<TypographyToken, "Body1" | "Body2">;
    /** The aria-label on the label element. If no label text provided, use this aria label prop. */
    ariaLabel?: string;
} & React.RefAttributes<HTMLInputElement>>;
export default FormCheckbox;
