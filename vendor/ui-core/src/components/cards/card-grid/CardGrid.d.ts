import { default as React } from 'react';
import { FlexProps } from '../../../hooks/ui/use-flex';
import { SpacingProps } from '../../../hooks/ui/use-spacing';
export type StandardCardGridProps = SpacingProps & Pick<FlexProps, "gap"> & {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
};
declare const CardGrid: ({ children, className, gap, ...rest }: StandardCardGridProps) => import("react/jsx-runtime").JSX.Element;
export default CardGrid;
