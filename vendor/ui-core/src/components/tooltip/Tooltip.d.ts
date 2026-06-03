import { TippyProps } from '@tippyjs/react';
import { default as React } from 'react';
import { Token as ColorToken } from '../../design-tokens/colors';
import { Token as TypographyVariant } from '../../design-tokens/typography';
export type TooltipProps = Pick<TippyProps, "visible" | "disabled" | "reference" | "zIndex"> & {
    toolTipText?: string;
    variant?: Extract<TypographyVariant, "Microcopy" | "Subtitle2">;
    background?: Extract<ColorToken, "Grey600" | "White">;
    showCloseButton?: boolean;
    children: React.ReactElement<any>;
    onCloseClick?: () => void;
    closeButtonAriaLabel?: string;
    fixed?: boolean;
};
declare const Tooltip: ({ toolTipText, children, visible, disabled, reference, variant, background, showCloseButton, onCloseClick, closeButtonAriaLabel, zIndex, fixed, }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
