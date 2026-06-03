import { ReactNode } from 'react';
import { default as ResponsiveValue } from '../../base/responsive-value';
import { BoxProps } from '../../components';
export type Anchor = "top" | "right" | "bottom" | "left";
export type DrawerProps = BoxProps & {
    active?: boolean;
    anchor?: ResponsiveValue<Anchor>;
    className?: string;
    children: ReactNode;
};
declare const Drawer: ({ active, anchor, children, className, ...rest }: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export default Drawer;
