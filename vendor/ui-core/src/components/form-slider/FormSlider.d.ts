import { IconId } from '../../design-tokens';
export interface FormSliderProps {
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (value: number) => void;
    formatTooltip?: (value: number) => string;
    className?: string;
    icon: IconId;
    ariaLabelledBy?: string;
    ariaLabel?: string;
}
declare const FormSlider: ({ min, max, step, value, onChange, formatTooltip, className, icon, ariaLabelledBy, ariaLabel, }: FormSliderProps) => import("react/jsx-runtime").JSX.Element;
export default FormSlider;
