export declare const YOUTUBE_MODAL_KEY = "youtube";
export type YoutubeVideoProps = {
    videoId: string;
    autoplay?: boolean;
    iFrameClassName?: string;
    width?: string;
    height?: string;
    showRelated?: boolean;
    aspectRatio: "hdtv" | "landscape" | "portrait" | "square";
};
declare const YoutubeVideo: ({ videoId, autoplay, showRelated, width, height, iFrameClassName, aspectRatio, }: YoutubeVideoProps) => import("react/jsx-runtime").JSX.Element;
export default YoutubeVideo;
