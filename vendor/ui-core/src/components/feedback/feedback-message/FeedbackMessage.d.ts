import { default as React } from 'react';
import { ColorToken } from '../../../design-tokens';
import { SizesProps } from '../../../hooks/ui/use-size';
export type FeedbackMessageProps = {
    title?: string;
    message?: string;
    variant: Extract<ColorToken, "SuccessGreen" | "ErrorRed" | "Grey400" | "Secondary" | "SecondaryDarker">;
    children?: React.ReactNode | React.ReactNode[];
    closeLabel?: string;
    onClose?: () => void;
    className?: string;
    width?: SizesProps["width"];
};
declare const FeedbackMessage: ({ title, message, variant, children, closeLabel, onClose, className, width, }: FeedbackMessageProps) => import("react/jsx-runtime").JSX.Element;
export default FeedbackMessage;
