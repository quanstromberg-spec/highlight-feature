import { ResponsiveValue } from '../../base';
import { BorderRadiusProps } from '../../hooks/ui/use-border-radius';
import { ColorProps } from '../../hooks/ui/use-colors';
import { FlexProps } from '../../hooks/ui/use-flex';
import { PaddingProps } from '../../hooks/ui/use-spacing';
import { BoxProps } from '../box/Box';
export type GridItemProps = PaddingProps & ColorProps & BorderRadiusProps & Pick<BoxProps, "tag"> & Pick<FlexProps, "alignItems" | "alignContent" | "justifyContent"> & {
    /** DOM Id */
    id?: string;
    /** A responsive value that decides how many columns this item spans. */
    span?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    /** The content of the grid item. */
    children?: React.ReactNode | React.ReactNode[];
};
/** The Grid Item is a surface that is intended to be used within a <Grid>.   */
declare const GridItem: import('react').ForwardRefExoticComponent<PaddingProps & import('../../hooks').ForegroundColorProps & import('../../hooks').BackgroundColorProps & BorderRadiusProps & Pick<BoxProps, "tag"> & Pick<FlexProps, "alignItems" | "alignContent" | "justifyContent"> & {
    /** DOM Id */
    id?: string;
    /** A responsive value that decides how many columns this item spans. */
    span?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
    /** The content of the grid item. */
    children?: React.ReactNode | React.ReactNode[];
} & import('react').RefAttributes<HTMLDivElement>>;
export default GridItem;
