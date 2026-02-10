import type { RowData } from '@tanstack/table-core';

declare module '@tanstack/table-core' {
  // eslint-disable-next-line
  interface ColumnMeta<TData extends RowData, TValue> {
    headerStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    type?: string;
    colSpan?: number;
    rowSpan?: number;
    displayNone?: boolean;
  }
}
