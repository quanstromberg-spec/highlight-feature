import { default as React, ComponentProps } from 'react';
import { PictureData } from './types';
import { BorderRadiusProps } from '../../hooks/ui/use-border-radius';
import { SizesProps } from '../../hooks/ui/use-size';
import { MarginProps } from '../../hooks/ui/use-spacing';
import { default as Image } from '../image/Image';
type CommonPictureProps = BorderRadiusProps & MarginProps & SizesProps & Pick<ComponentProps<typeof Image>, "alt" | "autoSizes" | "aspectRatio" | "loading" | "onLoad"> & {
    /** Any additional css classes on the **img**-element. */
    className?: string;
};
type ConditionalPictureProps = {
    /**
     * This property can be used instead of using "children" to create <source> within
     * the <picture>
     */
    pictureData?: PictureData;
    /**
     * When assigning via pictureData, this sizes prop will be transferred to all `sizes`-attributes on the sources.
     */
    sizes?: string;
    /** When assigning pictureData, you shouldn't manually create the children. */
    children?: never;
} | {
    /** The <Source> components of the Picture */
    children?: React.ReactNode | React.ReactNode[];
    /** When using children, you should assign the "sizes" on the <Source> components. */
    sizes?: never;
    /** When using children, you shouldn't use `pictureData` prop. */
    pictureData?: never;
};
export type PictureProps = CommonPictureProps & ConditionalPictureProps;
/**
 * The Picture component can be used when you need to have "art-direction", ex. Different images in
 * different screen sizes. For instance, if the aspect ratio of the image changes etc.
 *
 * Another reason to use `<Picture>` instead of `<Image>` is if you want to provide the image with multiple
 * image types. Ex, one "webp"-version and one "jpg"-version.
 *
 * Note: when using `pictureData` and only one variant is supplied, an `<Image>` will instead be used.
 */
declare const Picture: React.ForwardRefExoticComponent<PictureProps & React.RefAttributes<HTMLPictureElement>>;
export default Picture;
