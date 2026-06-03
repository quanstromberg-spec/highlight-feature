import { SpacingProps } from '../../hooks/ui/use-spacing';
import { ColorProps } from '../../hooks/ui/use-colors';
import { default as React } from 'react';
import { ResponsiveValue } from '../../base';
import { SizesProps } from '../../hooks/ui/use-size';
export type GridProps = SpacingProps & ColorProps & SizesProps & {
    /** DOM id */
    id?: string;
    /** Any additional css-class */
    className?: string;
    /** The gap of the grid */
    gap?: ResponsiveValue<number>;
    /** Controls the column-gap */
    columnGap?: ResponsiveValue<number>;
    /** Controls the row-gap */
    rowGap?: ResponsiveValue<number>;
    /** The Grid Items */
    children?: React.ReactNode | React.ReactNode[];
};
/**
 * The <Grid> Component is a simple 12 column layout component for consumers that
 * want to have a 12-grid that fits well into UI Core and how you work with breakpoints,
 * responsive values etc.
 */
declare const Grid: React.ForwardRefExoticComponent<import('../../hooks').MarginProps & import('../../hooks').PaddingProps & import('../../hooks').ForegroundColorProps & import('../../hooks').BackgroundColorProps & SizesProps & {
    /** DOM id */
    id?: string;
    /** Any additional css-class */
    className?: string;
    /** The gap of the grid */
    gap?: ResponsiveValue<number>;
    /** Controls the column-gap */
    columnGap?: ResponsiveValue<number>;
    /** Controls the row-gap */
    rowGap?: ResponsiveValue<number>;
    /** The Grid Items */
    children?: React.ReactNode | React.ReactNode[];
} & React.RefAttributes<HTMLDivElement>>;
export default Grid;
