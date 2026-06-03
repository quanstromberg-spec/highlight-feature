import { default as React } from 'react';
import { ResponsiveValue } from '../../base/responsive-value';
import { MarginProps, PaddingValue } from '../../hooks/ui/use-spacing';
export type ScrollerAriaLabels = {
    prevButton: string;
    nextButton: string;
    segmentButton: string;
};
export type ScrollerProps = MarginProps & {
    /** DOM id of the component */
    id?: string;
    /** an additional classname to the container. */
    className?: string;
    /** the children of the scroller. */
    children?: React.ReactNode | React.ReactNode[];
    /** assign to turn into "controlled" mode. */
    activeIndex?: number;
    /** Provide a label to give context for screen readers */
    "aria-label"?: string;
    /** Specify a responsive value for the gap between each scroller item */
    gap?: ResponsiveValue<number>;
    /**
     * Decides the different modes for the scroller buttons. `"intersect"` (default) causes them to appear half inside and half outside the end
     * of the scroller. `inside` makes them appear aligned to the ends and `disabled` keeps them from rendering all together.
     */
    buttonStyle?: "intersect" | "inside";
    /** Sets the size of the scroller buttons, the default is `"big"` */
    buttonSize?: "big" | "medium";
    /**
     * Lets you control when the butttons are visible. `"visible"` means that the button(s) is visible
     * always (when appropriate, and not for touch devices), setting to `"hover"` means they appear when hovering and `"disabled"` removes buttons
     * entirely.
     */
    buttonActivation?: "visible" | "hover" | "disabled";
    /** Controls the horizontal padding around the segments. */
    segmentsPx?: PaddingValue;
    /**
     * Event occuring when the active item (the one closest to the scrollers viewport start) changes.
     * This event with occur within an "animation frame" and as often as it can while it is scrolling so you might want to pass
     * a throttled or debounced event listener.
     */
    onActiveIndexChanged?: (activeIndex: number) => void;
    /** Event fired when a user has scrolled to the start of the carousel */
    onReachedStart?: () => void;
    /** Event fired when a user has reached the end of the carousel */
    onReachedEnd?: () => void;
    /** Offset for the arrow navigation buttons */
    arrowButtonsOffset?: number;
    /** Event fired when a user clicks one of the scroller buttons */
    onScrollerButtonClicked?: (direction?: "previous" | "next") => void;
    /** Aria labels for the buttons */
    ariaLabels: ScrollerAriaLabels;
    ariaLive?: React.AriaAttributes["aria-live"];
};
/** The `<Scroller>` component is a component that helps with displaying items in a "paginagion" or "carousel". */
declare const Scroller: React.ForwardRefExoticComponent<MarginProps & {
    /** DOM id of the component */
    id?: string;
    /** an additional classname to the container. */
    className?: string;
    /** the children of the scroller. */
    children?: React.ReactNode | React.ReactNode[];
    /** assign to turn into "controlled" mode. */
    activeIndex?: number;
    /** Provide a label to give context for screen readers */
    "aria-label"?: string;
    /** Specify a responsive value for the gap between each scroller item */
    gap?: ResponsiveValue<number>;
    /**
     * Decides the different modes for the scroller buttons. `"intersect"` (default) causes them to appear half inside and half outside the end
     * of the scroller. `inside` makes them appear aligned to the ends and `disabled` keeps them from rendering all together.
     */
    buttonStyle?: "intersect" | "inside";
    /** Sets the size of the scroller buttons, the default is `"big"` */
    buttonSize?: "big" | "medium";
    /**
     * Lets you control when the butttons are visible. `"visible"` means that the button(s) is visible
     * always (when appropriate, and not for touch devices), setting to `"hover"` means they appear when hovering and `"disabled"` removes buttons
     * entirely.
     */
    buttonActivation?: "visible" | "hover" | "disabled";
    /** Controls the horizontal padding around the segments. */
    segmentsPx?: PaddingValue;
    /**
     * Event occuring when the active item (the one closest to the scrollers viewport start) changes.
     * This event with occur within an "animation frame" and as often as it can while it is scrolling so you might want to pass
     * a throttled or debounced event listener.
     */
    onActiveIndexChanged?: (activeIndex: number) => void;
    /** Event fired when a user has scrolled to the start of the carousel */
    onReachedStart?: () => void;
    /** Event fired when a user has reached the end of the carousel */
    onReachedEnd?: () => void;
    /** Offset for the arrow navigation buttons */
    arrowButtonsOffset?: number;
    /** Event fired when a user clicks one of the scroller buttons */
    onScrollerButtonClicked?: (direction?: "previous" | "next") => void;
    /** Aria labels for the buttons */
    ariaLabels: ScrollerAriaLabels;
    ariaLive?: React.AriaAttributes["aria-live"];
} & React.RefAttributes<HTMLDivElement>>;
export default Scroller;
