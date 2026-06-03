import { default as React } from 'react';
type TableData = (string | React.ReactElement)[][];
export interface TableProps {
    data: TableData;
    headers: (string | React.ReactElement)[];
    className?: string;
    tableLayout?: "auto" | "fixed";
    scrollable?: boolean;
    stickyHeader?: boolean;
    /** Accessible label for the table, announced by screen readers to identify it. */
    caption?: string;
    /** When true, the first cell of each row is rendered as a <th scope="row"> row header. */
    rowHeader?: boolean;
    activeIndex?: number;
}
declare const Table: (props: TableProps) => import("react/jsx-runtime").JSX.Element;
export default Table;
