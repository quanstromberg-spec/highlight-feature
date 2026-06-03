import { ReactNode } from 'react';
import { IconTextButtonProps } from '../interaction/icon-text-link/IconTextLink';
type DropdownProps = IconTextButtonProps & {
    alignDrop?: "left" | "middle" | "right";
    closeOnSelect?: boolean;
    children: ReactNode | ReactNode[];
    id: string;
    asFunctionButton?: boolean;
};
declare const Dropdown: ({ alignDrop, closeOnSelect, children, id, asFunctionButton, iconId, iconSize, ...rest }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
