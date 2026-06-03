import { IconId } from '../../../base/icons';
import { ColorToken } from '../../../design-tokens';
export type ToastProps = {
    show?: boolean;
    appear?: boolean;
    variant?: Extract<ColorToken, "SuccessGreen" | "ErrorRed">;
    text: string;
    iconId?: IconId;
    target?: string;
    className?: string;
};
declare const Toast: ({ show, variant, appear, text, iconId, target, className, }: ToastProps) => import("react/jsx-runtime").JSX.Element | null;
export default Toast;
