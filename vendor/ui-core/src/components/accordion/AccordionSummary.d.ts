import { default as React } from 'react';
export type AccordionSummaryProps = {
    title?: string;
    children?: React.ReactNode | React.ReactNode[];
};
declare const AccordionSummary: React.ForwardRefExoticComponent<AccordionSummaryProps & React.RefAttributes<HTMLElement>>;
export default AccordionSummary;
