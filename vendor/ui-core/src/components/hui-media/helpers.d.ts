import { ImageType, ImageVersionData } from './types';
export declare function toMime(type: ImageType | undefined): string | undefined;
export declare function toSrcSet(versions: ImageVersionData[]): string;
