import { default as React, SetStateAction } from 'react';
export type DropDownContextValue = {
    closeOnSelect: boolean;
    setIsOpen: (open: SetStateAction<boolean>) => void;
};
export declare const DropDownContext: React.Context<DropDownContextValue>;
