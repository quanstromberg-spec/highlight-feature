import { useSize, useBorderRadius } from '../../hooks';
import { ResponsiveValue } from '../../base';
import { MarginProps } from '../../hooks/ui/use-spacing';
export type ImageProps = Parameters<typeof useSize>[0] & Parameters<typeof useBorderRadius>[0] & MarginProps & Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "width" | "height"> & {
    /** Any additional css classname to use. */
    className?: string;
    /**
     * Setting this property to true will cause the Image to assign and keep the `sizes`-attribute consistent
     * with the image actual rendered width.
     *
     * This can be useful when defining a _correct_ `sizes` value is very
     * hard. Ex, having a `display: grid` where column-size is fluid and differs.
     *
     * **Note:** This makes the sizes attribute get assigned via javascript, so if you server-side render *only*
     * without hydrating, no image will be displayed.
     */
    autoSizes?: boolean;
    /**
     * Comes with a small set of aspect ratios to pick from. **Instead** of setting a "width" and "height"
     * you can assign one of the predefined values.
     */
    aspectRatio?: ResponsiveValue<"landscape" | "portrait" | "square" | "16-9">;
};
/**
 * The `<Image>` container helps with rendering an `<img>`-tag. If image couldn't be loaded or has
 * issues, it shows a "missing image" svg-icon.
 */
declare const Image: import('react').ForwardRefExoticComponent<Omit<ImageProps, "ref"> & import('react').RefAttributes<HTMLImageElement>>;
export default Image;
