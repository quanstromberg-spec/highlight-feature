import { default as React } from 'react';
import { SizesProps } from '../../hooks/ui/use-size';
export type IconStackProps = Pick<React.AriaAttributes, "aria-label" | "aria-labelledby"> & {
    className?: string;
    children: React.ReactNode[];
    size: SizesProps["size"];
};
/**
 * The Icon stack is a helper component that allows you to combine Icons by stacking them on top of each other.
 * By default the child `<Icon>`s gets the same size, but you can individually control them by assigning "size" on the Icons.
 */
declare const IconStack: ({ children, className, size, ...rest }: IconStackProps) => import("react/jsx-runtime").JSX.Element;
export default IconStack;
