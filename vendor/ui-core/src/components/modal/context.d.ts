import { default as React } from 'react';
export type ModalContextProps = {
    active: boolean;
    onClosing?: () => void;
};
declare const ModalContext: React.Context<ModalContextProps>;
export default ModalContext;
