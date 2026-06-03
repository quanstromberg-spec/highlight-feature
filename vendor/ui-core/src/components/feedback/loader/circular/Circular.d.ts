import { default as React } from 'react';
import { ForegroundColorProps } from '../../../../hooks/ui/use-colors';
import { SizesProps } from '../../../../hooks/ui/use-size';
export type CircularLoaderProps = SizesProps & ForegroundColorProps & Pick<React.SVGProps<SVGCircleElement>, "strokeWidth"> & {
    className?: string;
};
export declare const CircularLoader: ({ className, strokeWidth, ...rest }: CircularLoaderProps) => import("react/jsx-runtime").JSX.Element;
export default CircularLoader;
