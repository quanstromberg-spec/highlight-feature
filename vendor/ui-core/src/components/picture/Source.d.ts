import { PictureVariantData } from './types';
export type SourceProps = PictureVariantData & {
    media?: string;
    /** Set if you want to fully defined the sizes attribute yourself. */
    sizes?: string;
    /** size of the image in small screens */
    sm?: string;
    /** size of the image in medium screens */
    md?: string;
    /** size of the image in large screens */
    lg?: string;
    /** size of the image in extra large screens */
    xl?: string;
};
declare const Source: ({ media, sizes, sources, sm, md, lg, xl, output, }: SourceProps) => import("react/jsx-runtime").JSX.Element;
export default Source;
