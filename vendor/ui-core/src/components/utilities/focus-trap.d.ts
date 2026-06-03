import { ReactNode } from 'react';
import { BoxProps } from '../../components';
type FocusTrapProps = BoxProps & {
    children: ReactNode | ReactNode[];
    onEscape?: () => void;
    className?: string;
};
declare const FocusTrap: ({ children, onEscape, className, ...rest }: FocusTrapProps) => import("react/jsx-runtime").JSX.Element;
export default FocusTrap;
