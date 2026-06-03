import { default as React } from 'react';
import { FlexProps } from '../../../hooks/ui/use-flex';
import { SpacingProps } from '../../../hooks/ui/use-spacing';
export type AnimateHeightProps = SpacingProps & FlexProps & {
    children: React.ReactNode[] | React.ReactNode;
    expanded?: boolean;
};
declare const AnimateHeight: ({ children, expanded, ...rest }: AnimateHeightProps) => import("react/jsx-runtime").JSX.Element;
export default AnimateHeight;
