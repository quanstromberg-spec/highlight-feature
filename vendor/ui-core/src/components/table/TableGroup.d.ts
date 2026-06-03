import { default as React } from 'react';
import { Size } from '../../hooks/ui/use-size';
export interface TableGroupProps {
    children: React.ReactNode;
    scrollable?: boolean;
    stickyHeader?: boolean;
    stickyFirstColumn?: boolean;
    navigationButtons?: boolean;
    activeIndex?: number;
    maxHeight?: Size | undefined;
}
declare const TableGroup: ({ children, scrollable, stickyHeader: sticky, stickyFirstColumn, navigationButtons, activeIndex, maxHeight }: TableGroupProps) => import("react/jsx-runtime").JSX.Element;
export default TableGroup;
