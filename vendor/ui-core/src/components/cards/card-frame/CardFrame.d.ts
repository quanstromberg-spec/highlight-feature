import { default as React, ComponentProps } from 'react';
import { default as Box } from '../../box/Box';
import { PictureData } from '../../picture/types';
export type CardFrameAriaProps = Pick<React.AriaAttributes, "aria-hidden">;
export type CardFrameAspectRatio = "portrait" | "landscape" | "min-portrait" | "min-landscape" | "none";
export type CardFrameProps = ComponentProps<typeof Box> & CardFrameAriaProps & {
    className?: string;
    backgroundImage?: PictureData;
    border?: boolean;
    fade?: boolean;
    shadowHover?: boolean;
    aspectRatio?: CardFrameAspectRatio;
    hidden?: boolean;
    focusContent?: boolean;
    children: React.ReactNode | React.ReactNode[];
};
/** The card frame is the starting point when creating a new card. */
declare const CardFrame: React.ForwardRefExoticComponent<Omit<CardFrameProps, "ref"> & React.RefAttributes<HTMLElement>>;
export default CardFrame;
