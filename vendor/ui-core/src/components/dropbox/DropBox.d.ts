import { Placement, Strategy } from '@floating-ui/react';
import { ReactNode } from 'react';
import { ColorProps, PaddingProps } from '../../hooks';
import { BorderRadiusProps } from '../../hooks/ui/use-border-radius';
export type DropBoxProps = PaddingProps & ColorProps & BorderRadiusProps & {
    /** Assigning a value to `open` causes the DropBox to become "controlled" */
    open?: boolean;
    /** Assigning true to `defaultOpen` will cause the DropBoxes default state change. */
    defaultOpen?: boolean;
    /** Any additional css-classes */
    className?: string;
    /** The content of the dropbox */
    children?: ReactNode | ReactNode[];
    /** The element that should trigger the drop-box */
    toggler?: ReactNode;
    /** Placement strategy */
    placement?: Placement;
    /** Assign "fixed" if your `toggler` is placed in a fixed element. */
    strategy?: Strategy;
    /** Lets you control `tabindex` of the summary-element. */
    tabIndex?: React.HTMLAttributes<HTMLElement>["tabIndex"];
    /** Event executed when the element in the "toggler" has been clicked */
    onSummaryClicked?: () => void;
    /** Event executed when someone clicks outside of the DropBox. */
    onOutsideClicked?: () => void;
    /** Event executed when user hits Escape key and closes the DropBox */
    onEscape?: () => void;
    /** Disables the flip functionality in the middleware */
    disableFlip?: boolean;
};
/**
 * The DropBox can be used to reveal small bits of information/interactivity as a widget that
 * by default opens on click.
 */
declare const DropBox: import('react').ForwardRefExoticComponent<PaddingProps & import('../../hooks').ForegroundColorProps & import('../../hooks').BackgroundColorProps & BorderRadiusProps & {
    /** Assigning a value to `open` causes the DropBox to become "controlled" */
    open?: boolean;
    /** Assigning true to `defaultOpen` will cause the DropBoxes default state change. */
    defaultOpen?: boolean;
    /** Any additional css-classes */
    className?: string;
    /** The content of the dropbox */
    children?: ReactNode | ReactNode[];
    /** The element that should trigger the drop-box */
    toggler?: ReactNode;
    /** Placement strategy */
    placement?: Placement;
    /** Assign "fixed" if your `toggler` is placed in a fixed element. */
    strategy?: Strategy;
    /** Lets you control `tabindex` of the summary-element. */
    tabIndex?: React.HTMLAttributes<HTMLElement>["tabIndex"];
    /** Event executed when the element in the "toggler" has been clicked */
    onSummaryClicked?: () => void;
    /** Event executed when someone clicks outside of the DropBox. */
    onOutsideClicked?: () => void;
    /** Event executed when user hits Escape key and closes the DropBox */
    onEscape?: () => void;
    /** Disables the flip functionality in the middleware */
    disableFlip?: boolean;
} & import('react').RefAttributes<HTMLDetailsElement>>;
export default DropBox;
