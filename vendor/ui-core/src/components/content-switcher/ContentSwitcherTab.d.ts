export type ContentSwitcherTabProps = {
    /** Whether this tab is active or not */
    active?: boolean;
    /** Shorthand for setting content as text */
    text?: string;
    /** Instead of `text` you can control the contents of the tab yourself */
    children?: React.ReactNode | React.ReactNode[];
    /** Event called when the tab is clicked. */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
/**
 * This component represents a tab within the ContentSwitcher.
 */
declare const ContentSwitcherTab: import('react').ForwardRefExoticComponent<ContentSwitcherTabProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ContentSwitcherTab;
