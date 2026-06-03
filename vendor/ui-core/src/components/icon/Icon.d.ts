import { default as React } from 'react';
import { default as IconId } from '../../base/icons';
import { ForegroundColorProps } from '../../hooks/ui/use-colors';
import { SizesProps } from '../../hooks/ui/use-size';
import { SpacingProps } from '../../hooks/ui/use-spacing';
export type IconProps = ForegroundColorProps & Pick<SizesProps, "size"> & Pick<React.AriaAttributes, "aria-label"> & SpacingProps & {
    iconId: IconId;
    className?: string;
    disableRtlMirror?: boolean;
};
declare const Icon: React.ForwardRefExoticComponent<ForegroundColorProps & Pick<SizesProps, "size"> & Pick<React.AriaAttributes, "aria-label"> & import('../../hooks').MarginProps & import('../../hooks').PaddingProps & {
    iconId: IconId;
    className?: string;
    disableRtlMirror?: boolean;
} & React.RefAttributes<SVGSVGElement>>;
export default Icon;
