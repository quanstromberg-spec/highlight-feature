import { default as React } from 'react';
import { default as ResponsiveValue } from '../../base/responsive-value';
import { SpacingProps } from '../../hooks/ui/use-spacing';
export type PageGutterValue = ResponsiveValue<0 | 3 | 5 | 10 | 15 | 20 | "7-5p">;
export type ContainerSize = ResponsiveValue<"xlarge" | "large" | "medium" | "small" | "xsmall">;
export type ContainerProps = SpacingProps & {
    className?: string;
    pageGutter?: PageGutterValue;
    positionRoot?: boolean;
    size?: ContainerSize;
    children: React.ReactNode | React.ReactNode[];
};
declare const Container: ({ className, pageGutter, positionRoot, children, size, ...rest }: ContainerProps) => import("react/jsx-runtime").JSX.Element;
export default Container;
