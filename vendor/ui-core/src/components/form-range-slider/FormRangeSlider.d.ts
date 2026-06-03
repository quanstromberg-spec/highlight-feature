export type FormRangeSliderProps = {
    id: string;
    label: string;
    minValue: number;
    maxValue: number;
    step: number;
    selectedMinValue?: number;
    selectedMaxValue?: number;
    minValueLabel: string;
    maxValueLabel: string;
    onChangeListener?: (data: FormRangeSliderChangedEvent) => void;
    hideMinRange?: boolean;
    hideMaxRange?: boolean;
    ariaLabels: {
        ariaMinValueText: string;
        ariaMaxValueText: string;
        ariaHiddenGroupDescription: string;
    };
    defaultMinMaxLabels?: {
        min: string;
        max: string;
    };
};
export type FormRangeSliderChangedEvent = {
    selectedMinValue?: number;
    selectedMaxValue?: number;
};
export declare const FormRangeSlider: ({ id, label, minValue, maxValue, step, selectedMinValue, selectedMaxValue, minValueLabel, maxValueLabel, onChangeListener, defaultMinMaxLabels, hideMinRange, hideMaxRange, ariaLabels, }: FormRangeSliderProps) => import("react/jsx-runtime").JSX.Element;
export default FormRangeSlider;
