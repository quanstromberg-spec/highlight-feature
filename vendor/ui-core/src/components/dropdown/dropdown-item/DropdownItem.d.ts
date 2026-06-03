import { default as React, MouseEventHandler } from 'react';
type ButtonHtmlAttributes = Pick<React.HTMLAttributes<HTMLButtonElement>, "onClick">;
type DropdownItemProps = ButtonHtmlAttributes & {
    text: string;
    selected?: boolean;
    onSelected?: (selected: string) => void;
};
export type DropdownItemSelectedEvent = MouseEventHandler<HTMLButtonElement> & {
    selected: string;
};
export declare const DropdownItem: ({ text, onClick, selected, onSelected, }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;
export default DropdownItem;
