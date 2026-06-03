import { default as React } from 'react';
import { SpacingProps } from '../../hooks';
export type AccordionContentProps = SpacingProps & {
    children?: React.ReactNode | React.ReactNode[];
    /** Enables a max-width of 760px for the accordion content */
    hasMaxWidth?: boolean;
};
declare const AccordionContent: React.ForwardRefExoticComponent<import('../../hooks').MarginProps & import('../../hooks').PaddingProps & {
    children?: React.ReactNode | React.ReactNode[];
    /** Enables a max-width of 760px for the accordion content */
    hasMaxWidth?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export default AccordionContent;
