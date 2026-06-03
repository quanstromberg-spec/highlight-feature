export type ContentSwitcherProps = {
    /** The content of the ContentSwitcher, should be a collection of `<ContentSwitcherTab>` */
    children: React.ReactNode | React.ReactNode[];
    alternateBackground?: boolean;
};
/**
 * The Content Switcher is a component that helps with
 * building a tab strip-looking component.
 *
 * This component is only the nav bar and you will need to sort out
 * hiding/showing components yourself as well as managing states.
 */
declare const ContentSwitcher: import('react').ForwardRefExoticComponent<ContentSwitcherProps & import('react').RefAttributes<HTMLDivElement>>;
export default ContentSwitcher;
