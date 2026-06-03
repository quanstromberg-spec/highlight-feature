import { default as ResponsiveValue } from '../../base/responsive-value';
import { default as React } from 'react';
import { default as TabItem } from './partials/tab-item';
export type TabProps = {
    children: React.ReactNode | React.ReactNode[];
    direction: ResponsiveValue<"horizontal" | "vertical">;
    fullWidth?: boolean;
};
declare const Tab: ({ children, direction, fullWidth, }: TabProps) => import("react/jsx-runtime").JSX.Element;
export default Tab;
export { Tab, TabItem };
