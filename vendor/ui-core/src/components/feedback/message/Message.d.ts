import { SpacingProps } from '../../../hooks/ui/use-spacing';
export type MessageVariant = "warning" | "quote" | "info";
type MessageProps = SpacingProps & {
    variant: MessageVariant;
    text: string;
    className?: string;
    iconBackground?: "white" | "grey";
};
export declare const Message: ({ variant, text, iconBackground, className }: MessageProps) => import("react/jsx-runtime").JSX.Element;
export default Message;
