export type ImageType = "WEBP" | "JPG" | "PNG";
export type FocalPoint = {
    x: number;
    y: number;
};
export type ImageVersionData = {
    config?: string;
    url: string;
    width: number;
};
export type ImageFormatData = {
    type: ImageType;
    sources: ImageVersionData[];
};
export type ImageData = {
    alt?: string;
    focalPoint?: FocalPoint;
    formats: ImageFormatData[];
};
export type PictureData = {
    /** alt text for the <img> element. */
    alt?: string;
    /** fallback for browsers not supporting responsive images */
    fallback: string;
    /** The different variants (art direction or different image format (webp/jpg/png)) */
    variants: PictureVariantData[];
};
export type PictureVariantData = {
    /** image variant output (webp/jpg/png) */
    output?: string | null;
    /** the different sources om the picture variant (500px wide, 1000px wide and so on.) */
    sources: PictureSourceData[];
};
export type PictureSourceData = {
    /** The configs name (from back-end) */
    config?: string;
    /** the absolute url to the image. */
    url: string;
    /** the width of the picture */
    width: number;
    /** the height of the picture */
    height?: number;
};
