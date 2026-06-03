import { default as React } from 'react';
import { Token as TypographyVariant } from '../../design-tokens/typography';
import { ColorProps } from '../../hooks/ui/use-colors';
import { SpacingProps } from '../../hooks/ui/use-spacing';
import { TextStyleProps } from '../../hooks/ui/use-text-style';
type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "p" | "th" | "td" | "dd" | "dt" | "li" | "time" | "small" | "cite" | "label" | "var";
export type TypographyProps<T extends TypographyTag> = SpacingProps & ColorProps & TextStyleProps & {
    id?: string;
    tag?: T;
    tagRef?: React.Ref<HTMLElementTagNameMap[T]>;
    variant?: TypographyVariant;
    className?: string;
    text?: string;
    children?: React.ReactNode | React.ReactNode[];
    htmlFor?: string;
    ariaLabel?: string;
};
declare const Typography: <T extends TypographyTag = "div">({ id, tag, tagRef, variant, text, children, className, htmlFor, ariaLabel, ...rest }: TypographyProps<T>) => React.DetailedReactHTMLElement<{
    id: string | undefined;
    className: string;
    style: {};
    ref: React.Ref<HTMLElementTagNameMap[T]> | undefined;
    htmlFor: string | undefined;
    "aria-label": string | undefined;
}, HTMLElementTagNameMap[T]>;
export default Typography;
