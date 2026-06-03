import { default as React } from 'react';
type HeaderItem = string | React.ReactElement;
export interface TableGroupContextValue {
    scrollable: boolean;
    stickyHeader: boolean;
    stickyFirstColumn: boolean;
    isScrolled: boolean;
    registerThead: (el: HTMLTableSectionElement | null, headers: HeaderItem[]) => boolean;
    columnWidths: number[] | null;
    activeIndex?: number;
}
declare const TableGroupContext: React.Context<TableGroupContextValue>;
export default TableGroupContext;
