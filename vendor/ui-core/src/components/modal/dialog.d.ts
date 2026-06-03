import { BoxProps } from '../../components';
import { ReactNode } from 'react';
export type DialogProps = BoxProps & {
    children: ReactNode | ReactNode[];
    className?: string;
};
declare const Dialog: ({ children, className, backgroundColor, ...rest }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export default Dialog;
