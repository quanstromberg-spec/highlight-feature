import { default as React } from 'react';
import { Token as TypographyVariant } from '../../design-tokens/typography';
import { BorderRadiusProps } from '../../hooks/ui/use-border-radius';
import { SpacingProps } from '../../hooks/ui/use-spacing';
export type SkeletonProps = SpacingProps & BorderRadiusProps & {
    animating?: boolean;
    variant?: TypographyVariant;
    width?: string;
    height?: string;
    aspect?: number;
    children?: React.ReactNode | React.ReactNode[];
    style?: {
        [key: string]: string;
    };
};
declare const Skeleton: ({ aspect, width, height, animating, variant, children, br, style, ...rest }: SkeletonProps) => import("react/jsx-runtime").JSX.Element;
export default Skeleton;
