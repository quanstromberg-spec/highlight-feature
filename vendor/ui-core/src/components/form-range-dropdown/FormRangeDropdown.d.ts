import { default as React } from 'react';
export type FormRangeDropdownProps = {
    label: string;
    fromPlaceholder: string;
    toPlaceholder: string;
    minValue: number;
    maxValue: number;
    step: number;
    selectedMinValue?: number;
    selectedMaxValue?: number;
    prefixUnit?: string;
    suffixUnit?: string;
    onChangeListener?: (args: FormRangeDropdownChangedEvent) => void;
    minValueLabel?: string;
    maxValueLabel?: string;
    showMinSlider?: boolean;
    showMaxSlider?: boolean;
    labelFormatter?: (value: number) => string;
};
export type FormRangeDropdownChangedEvent = React.ChangeEvent<HTMLSelectElement> & {
    selectedMinValue?: number;
    selectedMaxValue?: number;
};
export declare const FormRangeDropdown: ({ label, fromPlaceholder, toPlaceholder, minValue, maxValue, step, selectedMinValue, selectedMaxValue, prefixUnit, suffixUnit, onChangeListener, minValueLabel, maxValueLabel, showMinSlider, showMaxSlider, labelFormatter, }: FormRangeDropdownProps) => import("react/jsx-runtime").JSX.Element;
export default FormRangeDropdown;
