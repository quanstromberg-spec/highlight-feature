import { default as React } from 'react';
import { BoxProps } from '../../box/Box';
export type CardContentProps = BoxProps & {
    children: React.ReactNode | React.ReactNode[];
    gradient?: boolean;
};
/**
 * The CardContent contains some default spacing and settings for content
 * within a card.
 */
declare const CardContent: ({ children, gradient, px, py, ...rest }: CardContentProps) => import("react/jsx-runtime").JSX.Element;
export default CardContent;
