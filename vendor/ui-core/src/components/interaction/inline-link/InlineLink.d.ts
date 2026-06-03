import { default as React } from 'react';
import { Token as TypographyVariant } from '../../../design-tokens/typography';
import { SpacingProps } from '../../../hooks/ui/use-spacing';
import { LinkData } from '../link/link-data';
type InlineLinkAriaAttributes = Pick<React.AriaAttributes, "aria-controls" | "aria-hidden" | "aria-label" | "aria-labelledby" | "aria-haspopup" | "aria-expanded">;
export type InlineLinkProps = InlineLinkAriaAttributes & Pick<SpacingProps, "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my"> & Partial<LinkData> & {
    className?: string;
    text: string;
    variant?: Extract<TypographyVariant, "Body1" | "Body2" | "Microcopy">;
    inverted?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};
export declare const InlineLink: {
    ({ className, text, variant, inverted, href, target, onClick, rel, m, mt, mr, mb, ml, mx, my, ...rest }: InlineLinkProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type InlineLinkButtonProps = InlineLinkProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const InlineLinkButton: {
    ({ className, text, variant, inverted, onClick, m, mt, mr, mb, ml, mx, my, ...rest }: InlineLinkButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
