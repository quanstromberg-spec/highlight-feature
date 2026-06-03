import { ComponentProps } from 'react';
import { IconButton } from '../interaction/buttons';
export type ScrollerButtonProps = {
    direction?: "prev" | "next";
    isValid?: boolean;
    style?: "intersect" | "inside";
    size?: "big" | "medium";
    activation?: "hover" | "visible";
    onClick?: ComponentProps<typeof IconButton>["onClick"];
    offsetTop?: number;
    ariaLabel?: string;
};
declare const ScrollerButton: ({ direction, isValid, style, size, activation, onClick, offsetTop, ariaLabel, }: ScrollerButtonProps) => import("react/jsx-runtime").JSX.Element;
export default ScrollerButton;
