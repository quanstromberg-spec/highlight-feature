import { default as React } from 'react';
export type ItemButtonProps = {
    itemVisible?: boolean;
    stepButtonContainer?: React.MutableRefObject<HTMLElement>;
    onClick?: () => void;
    index?: number;
    ariaLabel: string;
};
declare const ItemButton: ({ stepButtonContainer, itemVisible, onClick, index, ariaLabel, }: ItemButtonProps) => React.ReactPortal | null;
export default ItemButton;
