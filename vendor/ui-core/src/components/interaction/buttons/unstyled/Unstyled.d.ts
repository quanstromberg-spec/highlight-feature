import { default as React } from 'react';
import { BorderRadiusProps } from '../../../../hooks/ui/use-border-radius';
import { ColorProps } from '../../../../hooks/ui/use-colors';
import { FlexProps } from '../../../../hooks/ui/use-flex';
import { SizesProps } from '../../../../hooks/ui/use-size';
import { SpacingProps } from '../../../../hooks/ui/use-spacing';
export type UnstyledButtonProps = BorderRadiusProps & ColorProps & SizesProps & FlexProps & SpacingProps & Partial<Pick<HTMLButtonElement, "tabIndex" | "role">> & React.AriaAttributes & {
    id?: string;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
/**
 * The Unstyled Button is a component to use if you want a click event on something. It is basically
 * a clickable `<Box>` that renders as a `<button>`
 */
declare const UnstyledButton: React.ForwardRefExoticComponent<BorderRadiusProps & import('../../../../hooks').ForegroundColorProps & import('../../../../hooks').BackgroundColorProps & SizesProps & import('../../../../hooks').FlexContainerProps & import('../../../../hooks').FlexItemProps & import('../../../../hooks').ContainerProps & import('../../../../hooks').MarginProps & import('../../../../hooks').PaddingProps & Partial<Pick<HTMLButtonElement, "tabIndex" | "role">> & React.AriaAttributes & {
    id?: string;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.RefAttributes<HTMLButtonElement>>;
export default UnstyledButton;
