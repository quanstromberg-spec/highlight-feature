import { default as React } from 'react';
import { MasonryProps } from 'react-masonry-css';
export type CardMasonaryProps = Pick<MasonryProps, "breakpointCols"> & {
    children: React.ReactNode | React.ReactNode[];
};
/**
 * The Card Masonary can be used for presenting cards in a masonary.
 */
declare const CardMasonary: ({ children, breakpointCols }: CardMasonaryProps) => import("react/jsx-runtime").JSX.Element;
export default CardMasonary;
