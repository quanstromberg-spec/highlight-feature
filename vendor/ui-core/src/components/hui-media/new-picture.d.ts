import { default as React } from 'react';
import { default as ResponsiveValue } from '../../base/responsive-value';
import { BorderRadiusProps } from '../../hooks/ui/use-border-radius';
import { PictureData } from './types';
export type PictureProps = PictureData & BorderRadiusProps & {
    className?: string;
    loading?: "eager" | "lazy";
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    children?: React.ReactNode | React.ReactNode[];
    width?: number;
    height?: number;
    lazySizes?: boolean;
    block?: boolean;
    type?: ResponsiveValue<ImageAspectType>;
};
export type ImageAspectType = "landscape" | "portrait" | "square" | "16-9";
declare const Picture: ({ className, fallback, onLoad, loading, alt, type, width, height, children, lazySizes, variants, block, ...rest }: PictureProps) => import("react/jsx-runtime").JSX.Element;
export default Picture;
