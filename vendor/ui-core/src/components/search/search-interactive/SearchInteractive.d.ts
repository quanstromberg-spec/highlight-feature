import { default as React } from 'react';
export type SearchInteractiveProps = {
    className?: string;
    placeholder: string;
    submit?: boolean;
    name?: string;
    children?: React.ReactNode[] | React.ReactNode;
    value?: string;
    onChange?: (value: string) => void;
    onClickClear?: () => void;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
};
declare const SearchInteractive: React.ForwardRefExoticComponent<SearchInteractiveProps & React.RefAttributes<HTMLInputElement>>;
export default SearchInteractive;
