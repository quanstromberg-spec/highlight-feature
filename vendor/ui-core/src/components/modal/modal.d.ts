import { default as React } from 'react';
import { BackgroundColorProps } from '../../hooks/ui/use-colors';
export type ModalProps = BackgroundColorProps & {
    active: boolean;
    children: React.ReactNode;
    onClosing?: () => void;
    /** @deprecated use `backgroundColor` and `backgroundColorTint` instead.
     * Where `true` on mask means `backgroundColor="Black"` and `backgroundColorTint={.4}` */
    mask?: boolean;
    closeable?: boolean;
    pageScrollLock?: boolean;
    className?: string;
    /** Used for the description of the modal. Referenced with a unique id */
    ariaLabelledBy?: string;
    ariaBusy?: boolean;
    preventScrollOnClose?: boolean;
};
declare const Modal: ({ children, active, closeable, mask, backgroundColor, backgroundColorTint, pageScrollLock, onClosing, className, ariaLabelledBy, ariaBusy, preventScrollOnClose, }: ModalProps) => React.ReactPortal | null;
export default Modal;
