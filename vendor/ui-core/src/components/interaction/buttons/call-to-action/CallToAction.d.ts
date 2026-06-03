export declare const CallToActionButton: import('react').ForwardRefExoticComponent<import('../../../../hooks').MarginProps & Pick<import('react').AriaAttributes, "aria-hidden" | "aria-labelledby" | "aria-label" | "aria-controls" | "aria-expanded" | "aria-haspopup"> & {
    id?: string;
    className?: string;
    text?: string;
    name?: string;
    value?: string;
    width?: import('../../../../base').ResponsiveValue<"auto" | "full">;
    loading?: boolean;
    submit?: boolean;
    disabled?: boolean;
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    onClick?: import('react').MouseEventHandler<HTMLButtonElement>;
} & import('react').RefAttributes<HTMLButtonElement>>;
export declare const CallToActionLinkButton: import('react').ForwardRefExoticComponent<import('../../../../hooks').MarginProps & import('../../link/link-data').LinkData & Pick<import('react').AriaAttributes, "aria-hidden" | "aria-labelledby" | "aria-label"> & {
    id?: string;
    className?: string;
    text?: string;
    width?: import('../../../../base').ResponsiveValue<"auto" | "full">;
    loading?: boolean;
    disabled?: boolean;
    anchorProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    onClick?: import('react').MouseEventHandler<HTMLAnchorElement>;
} & import('react').RefAttributes<HTMLAnchorElement>>;
