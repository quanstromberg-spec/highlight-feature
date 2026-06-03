import { default as React } from 'react';
import { PaddingProps } from '../../hooks';
import { FlexContainerProps } from '../../hooks/ui/use-flex';
export type ScrollerItemProps = FlexContainerProps & PaddingProps & {
    id?: string;
    /** Setting this to `true` will cause this item's segment not to be rendered.  */
    disableSegment?: boolean;
    /** Assigning an aria label is **recommended** for screen reader purpose.  */
    "aria-label"?: string;
    /** The content of the scroller item */
    children?: React.ReactNode | React.ReactNode[];
    /**
     * Controls the flex-basis (the width) of the item. Setting it to "full" will make the item take the entire width of the scroller. Default is `"auto"` which makes the
     * items fit the content.
     */
    width?: "auto" | "full";
    /** Assign event handler that gets called everytime an item becomes visible or hidden */
    onVisibleChanged?: (visible: boolean) => void;
    /** Aria label for segment buttons */
    buttonAriaLabel?: string;
};
/** Represents a item in the `<Scroller>` */
declare const ScrollerItem: React.ForwardRefExoticComponent<FlexContainerProps & PaddingProps & {
    id?: string;
    /** @internal */
    observer?: IntersectionObserver;
    /** @internal */
    stepButtonContainer?: React.MutableRefObject<HTMLElement>;
    /** @internal */
    gotoIndex?: (index: number) => void;
    /** @internal */
    index?: number;
    /** Setting this to `true` will cause this item's segment not to be rendered.  */
    disableSegment?: boolean;
    /** Assigning an aria label is **recommended** for screen reader purpose.  */
    "aria-label"?: string;
    /** The content of the scroller item */
    children?: React.ReactNode | React.ReactNode[];
    /**
     * Controls the flex-basis (the width) of the item. Setting it to "full" will make the item take the entire width of the scroller. Default is `"auto"` which makes the
     * items fit the content.
     */
    width?: "auto" | "full";
    /** Assign event handler that gets called everytime an item becomes visible or hidden */
    onVisibleChanged?: (visible: boolean) => void;
    /** Aria label for segment buttons */
    buttonAriaLabel?: string;
} & React.RefAttributes<HTMLLIElement>>;
export default ScrollerItem;
