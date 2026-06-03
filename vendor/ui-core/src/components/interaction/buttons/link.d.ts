import { default as React } from 'react';
import { default as IconId } from '../../../base/icons';
import { Size } from '../../../hooks/ui/use-size';
declare const BaseLinkButton: React.ForwardRefExoticComponent<import('../../../hooks').MarginProps & import('../link/link-data').LinkData & Pick<React.AriaAttributes, "aria-hidden" | "aria-labelledby" | "aria-label"> & {
    id?: string;
    className?: string;
    text?: string;
    width?: import('../../../base').ResponsiveValue<"auto" | "full">;
    loading?: boolean;
    disabled?: boolean;
    anchorProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & {
    iconId?: IconId;
    iconSize?: number;
    loaderSize?: Size;
} & React.RefAttributes<HTMLAnchorElement>>;
export default BaseLinkButton;
