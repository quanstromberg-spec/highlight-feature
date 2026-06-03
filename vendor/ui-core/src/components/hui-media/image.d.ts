import { ImageData } from './types';
export type ImageProps = {
    image: ImageData;
    onLoad?: () => void;
    className?: string;
    sizes?: string;
    loading?: "eager" | "lazy";
};
declare const Image: (props: ImageProps) => import("react/jsx-runtime").JSX.Element;
export default Image;
