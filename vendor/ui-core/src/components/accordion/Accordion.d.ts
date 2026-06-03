import { default as React } from 'react';
import { SpacingProps } from '../../hooks/ui/use-spacing';
export type AccordionProps = SpacingProps & {
    /** Optional title above the accordion (for variant "prominent") */
    title?: string;
    /** Optional small title above the title (for variant "prominent") */
    smallTitle?: string;
    /** The DOM Id of the `<details>` element */
    id?: string;
    /** Additional css-classes */
    className?: string;
    /** The children of the accordion */
    children: React.ReactNode | React.ReactNode[];
    /** In uncontrolled mode; this decides the accordions initial open-state */
    defaultOpen?: boolean;
    /** Assign to turn accordion into "controlled" mode. */
    open?: boolean;
    /** Event triggered when a user clicks on the `<AccordionSummary>` */
    onToggle?: () => void;
    /** Determines what design should be used for the accordion */
    variant?: "default" | "prominent";
    /** Removes the border-bottom on the <details> element */
    noBorderBottom?: boolean;
    /** Removes the border-top on the <details> element */
    noBorderTop?: boolean;
};
/**
 * A Component for hiding content in an "accordion".
 */
export declare const Accordion: React.ForwardRefExoticComponent<import('../../hooks').MarginProps & import('../../hooks').PaddingProps & {
    /** Optional title above the accordion (for variant "prominent") */
    title?: string;
    /** Optional small title above the title (for variant "prominent") */
    smallTitle?: string;
    /** The DOM Id of the `<details>` element */
    id?: string;
    /** Additional css-classes */
    className?: string;
    /** The children of the accordion */
    children: React.ReactNode | React.ReactNode[];
    /** In uncontrolled mode; this decides the accordions initial open-state */
    defaultOpen?: boolean;
    /** Assign to turn accordion into "controlled" mode. */
    open?: boolean;
    /** Event triggered when a user clicks on the `<AccordionSummary>` */
    onToggle?: () => void;
    /** Determines what design should be used for the accordion */
    variant?: "default" | "prominent";
    /** Removes the border-bottom on the <details> element */
    noBorderBottom?: boolean;
    /** Removes the border-top on the <details> element */
    noBorderTop?: boolean;
} & React.RefAttributes<HTMLDetailsElement>>;
export default Accordion;
