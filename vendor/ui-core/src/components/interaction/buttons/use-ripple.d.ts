import { default as React } from 'react';
declare const useRipple: (buttonRef: React.RefObject<HTMLButtonElement> | React.RefObject<HTMLAnchorElement>) => {
    active: boolean;
    style: {
        [x: number]: string;
    };
    mouseDown: (e: React.MouseEvent) => void;
};
export default useRipple;
