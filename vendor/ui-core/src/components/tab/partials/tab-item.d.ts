import { LinkData } from '../../interaction/link/link-data';
import { default as React } from 'react';
export type TabItemProps = Partial<LinkData> & {
    active?: boolean;
    badgeText?: string;
    onClick?: (e: React.MouseEvent) => void;
};
declare const TabItem: ({ active, href, text, badgeText, onClick, }: TabItemProps) => import("react/jsx-runtime").JSX.Element;
export default TabItem;
