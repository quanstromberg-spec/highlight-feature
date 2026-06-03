import { default as React } from 'react';
import { MarginProps } from '../../../../hooks';
export type FilterPillProps = MarginProps & {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
};
/**
 * The `<FilterPill>` is a component to display an currently active filter and clicking it should remove it.
 * It is really just a "pre-configured" `<FunctionButton>`.
 */
export declare const FilterPill: {
    ({ text, onClick, className, ...rest }: FilterPillProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
